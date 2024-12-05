import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Loader from "../Loader";
import {
  useAddToFavoriteMutation,
  useGetFavoritesQuery,
} from "../../redux/api";
import { FC } from "react";

type PropsType =
  { id?: number }

const LikeButton: FC<PropsType> = ({ id }) => {
  const favState = useGetFavoritesQuery();

  const isLiked = favState.data?.results.find((i) => i.id === id);

  const [addToFavorite, { isLoading }] = useAddToFavoriteMutation();

  const handleLike = () => {
    addToFavorite({
      media_id: id || 1,
      media_type: "movie",
      favorite: isLiked ? false : true,
    });
  };

  if (!id) return <span>id bulunamadı</span>;

  return (
    <div>
      <button
        className="mt-4 text-xl"
        disabled={isLoading}
        onClick={handleLike}
      >
        {isLoading ? (
          <Loader type="xs" />
        ) : isLiked ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  );
};

export default LikeButton;
