/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Star, StarOff } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import APIService from "@/app/services/APIService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Favorite = {
  imdbID: string;
  _id: string;
};

type User = {
  externalId: string;
  favorites: Favorite[];
};

function FavButton({
  imdbID,
  posterUrl,
}: {
  imdbID: string;
  posterUrl: string;
}) {
  const { user, isLoaded } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchUser = async (): Promise<User | null> => {
    try {
      if (!user) return null;
      const res = await APIService.getUser(user.id);

      // console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  };

  const handleClick = async (): Promise<void> => {
    try {
      if (user && isLoaded) {
        if (!isFavorite) {
          const res = await APIService.addtoFavorites({
            id: user?.id,
            imdbID: imdbID,
            posterUrl: posterUrl,
          });
          if (res.status === 200) {
            setIsFavorite(!isFavorite);
            toast.success('Title added to favorites', { position: "top-right" });
          }
          return;
        }
  
        const res = await APIService.removeFromFavorites({
          id: user?.id,
          imdbID: imdbID,
        });
        if (res.status === 200) {
          setIsFavorite(!isFavorite);
          toast.success('Title removed from favorites', { position: "top-right" });
        }
        return;
      } else {
        toast.warning('Please sign in to add to favorites.', { position: "top-right" });
      }
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
  }, [imdbID, user, isLoaded]);

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
