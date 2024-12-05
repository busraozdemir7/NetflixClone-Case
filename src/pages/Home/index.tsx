import { FC } from "react";
import MovieList from "../../components/MovieList";

const Home: FC = () => {
  return (
    <div className="flex flex-col gap-20 bg-black text-white">
      <MovieList title="Popular" endpoint="/movie/popular" />
      <MovieList title="Top Rated" endpoint="/movie/top_rated" />
      <MovieList title="Trending" endpoint="/trending/movie/day" />
    </div>
  );
};

export default Home;
