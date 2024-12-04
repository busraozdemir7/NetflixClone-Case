import { FC } from "react";
import { useGetDetailQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link, useParams } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import Title from "../../components/Title";
import { IoIosArrowBack } from "react-icons/io";
import ItemList from '../../components/ItemList';
import LikeButton from "../../components/LikeButton";

// movieDetailType: API'den dönen film detay verisini temsil eder
type GenreType = {
  id: number;
  name: string;
};

type ProductionCompanyType = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type LanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type MovieDetailType = {
  id: number;
  title: string;
  backdrop_path: string;
  tagline: string;
  overview: string;
  genres: GenreType[];
  production_companies: ProductionCompanyType[];
  spoken_languages: LanguageType[];
  production_countries: CountryType[];
};

type CountryType = {
  iso_3166_1: string;
  name: string;
};

// PropsType: Detail bileşeni için bir özellik gerekmiyor, ancak tiplerin doğru olduğundan emin olmalıyız
type PropsType = {};  // Boş, çünkü Detail bileşeni herhangi bir prop almıyor

const Detail: FC<PropsType> = () => {
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

        <LikeButton id={id ? +id : 1} />
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
