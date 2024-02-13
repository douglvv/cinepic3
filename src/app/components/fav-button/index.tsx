/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Star, StarOff } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";

type Favorite = {
  imdbID: string;
  _id: string;
};

type User = {
  externalId: string;
  favorites: Favorite[];
};

function FavButton({ imdbID }: { imdbID: string }) {
  const { user } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchUser = async (): Promise<User | null> => {
    try {
      if (!user) return null; // Ensure user is available
      const res = await axios.get<User>(
        `http://localhost:3000/api/getUser/${user.id}`
      );

      return res.data;
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  };

  const handleClick = async (): Promise<void> => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/${
          isFavorite ? "removeFromFavorites" : "addToFavorites"
        }`,
        {
          id: user?.id,
          imdbID: imdbID,
        }
      );
      if (res.status === 200) setIsFavorite(!isFavorite);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUser();
      if (userData) {
        const isTitleFavorite = userData.favorites.some(
          (favorite) => favorite.imdbID === imdbID
        );
        setIsFavorite(isTitleFavorite);
      }
    };
    loadUser();
  }, [imdbID, user]);

  return (
    <div className="flex items-center justify-center p-1 rounded-full bg-transparent mx-4">
      <button
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        onClick={handleClick}
      >
        {isFavorite ? (
          <StarOff className="text-neutral-200 drop-shadow hover:text-yellow-400 w-6 h-6 transition-all duration-300" />
        ) : (
          <Star className="text-neutral-200 drop-shadow hover:text-yellow-400 w-6 h-6 transition-all duration-300" />
        )}
      </button>
    </div>
  );
}

export default FavButton;
