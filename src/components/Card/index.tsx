import { Link } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import { FC } from "react";
import LikeButton from "../LikeButton";


type MovieType = {
  id: number;
  original_title: string;
  poster_path: string;
};

type PropsType = {
  movie: MovieType;
};

const Card: FC<PropsType> = ({ movie }) => {
  return (
    <div className="border border-zinc-600 rounded pb-4 px-4 cursor-pointer hover:bg-zinc-800 h-full max-h-[600px]">
      <div className="w-full flex justify-end mb-3">
        <LikeButton id={movie.id} />
      </div>
      <Link className="flex flex-col gap-4" to={`/movie/${movie.id}`}>
        <img className="rounded-md w-full h-full object-contain" src={baseImgUrl + movie.poster_path} />
        <h2 className="font-semibold line-clamp-2">{movie.original_title}</h2>
      </Link>
    </div>
  );
};

export default Card;

