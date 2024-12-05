import { FC } from "react";
import { useGetDetailQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link, useParams } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import Title from "../../components/Title";
import { IoIosArrowBack } from "react-icons/io";
import ItemList from '../../components/ItemList';
import LikeButton from "../../components/LikeButton"

const Detail: FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDetailQuery(id);

  return (
    <div>
      <div className="flex justify-between">
        <Link
          className="flex items-center gap-2 mb-10 border border-zinc-700 rounded p-1 px-3 w-fit hover:bg-zinc-800"
          to={"/"}
        >
          <IoIosArrowBack />
          Back
        </Link>

        {id
          ? <LikeButton id={+id} />
          : <span>Id bilinmiyor</span>
        }
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="flex flex-col ">
            <img
              className="mb-5 lg:mb-20 max-h-[50vh] object-contain"
              src={baseImgUrl + data.backdrop_path}
            />

            <div className="flex justify-between">
              <Title>{data.title}</Title>

              <div className="flex gap-3 text-gray-500">
                {data.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
            </div>

            <p className="text-gray-500 mb-4">{data.tagline}</p>

            <p>{data.overview}</p>

            <ItemList data={data.production_companies} />
            <ItemList data={data.spoken_languages} />
            <ItemList data={data.production_countries} />
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
