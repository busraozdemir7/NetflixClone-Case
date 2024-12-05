import { FC } from "react";
import { useGetFavoritesQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/Card";
import Title from "../../components/Title";

const Favorites: FC = () => {
  const { isLoading, error, data } = useGetFavoritesQuery();

  return (
    <div>
      <Title>Favorites</Title>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.results.map((movie, key) => (
              <div className="col" key={key}>
                <Card movie={movie} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Favorites;
