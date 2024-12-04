import { FC } from "react";
import { useGetFavoritesQuery } from "../../redux/api";
import { movieType } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/Card";
import Title from "../../components/Title";

// Favorites bileşeni dışarıdan herhangi bir prop almadığı için PropsType boş kalacak
type PropsType = {};  // Boş, çünkü Favorites bileşeni herhangi bir prop almıyor

const Favorites: FC<PropsType> = () => {
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
            {data.results.map((movie: movieType, key: number) => (
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
