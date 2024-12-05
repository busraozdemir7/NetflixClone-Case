import { FC } from "react";
import { useGetMoviesQuery } from "../../redux/api";
import Card from "../Card";
import Error from "../Error";
import Loader from "../Loader";
import Title from "../Title";

type PropsType = {
  endpoint: string;
  title: string;
};

const MovieList: FC<PropsType> = ({ endpoint, title }) => {
  const { data, isLoading, error } = useGetMoviesQuery(endpoint);

  return (
    <div>
      <Title>{title}</Title>

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

export default MovieList;
