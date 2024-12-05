import { FC } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-600 text-white flex justify-between p-5 lg:px-10">
      <Link className="text-3xl font-extrabold text-red-500" to="/">
        NETFLIX
      </Link>


      <Link className="flex items-center gap-3 text-lg font-medium hover:text-red-500" to="/favorites">
        <FaHeart className="text-2xl text-pink-500 hover:text-red-500" />
        Favorites
      </Link>
    </header>
  );
};

export default Header;
