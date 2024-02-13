/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Star, StarOff } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type favorite = {
  imdbID: string;
  _id: string;
};

type User = {
  externalId: string;
  favorites: [favorite];
};

function FavButton({ imdbID }: { imdbID: string }) {
  const { user } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);

  const getUser = async (): Promise<User> => {
    try {
      const res: AxiosResponse = await axios.get(
        `http://localhost:3000/api/getUser/${user?.id}`
      );
      const data = res.data as User;
      console.log(data);
      return data;
    } catch (error: any) {
      console.log(error.message);
      return error;
    }
  };

  const handleClick = async (): Promise<void> => {
    if (isFavorite) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/addToFavorites",
          {
            id: user?.id,
            imdbID: imdbID,
          }
        );

        if (res.status === 200) return;
      } catch (error: any) {
        console.log(error.message);
        return error;
      }
    }

    if (!isFavorite) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/removeFromFavorites",
          {
            id: user?.id,
            imdbID: imdbID,
          }
        );

        if (res.status === 200) return;
      } catch (error: any) {
        console.log(error.message);
        return error;
      }
    }
  };

  useEffect(() => {
    const userData = getUser().then((userData) => {
      const favorites = userData.favorites

      const isTitleFavorite = favorites.some((favorite) => {
        favorite.imdbID === imdbID;
      });

      if (isTitleFavorite) setIsFavorite(true);
      if (!isTitleFavorite) setIsFavorite(false);
    });
  }, [imdbID]);

  return (
    <>
      <div className="flex items-center justify-center p-1 rounded-full bg-transparent">
        <button
          title={isFavorite ? "Add to favorites" : "Remove from favorites"}
          onClick={handleClick}
        >
          {isFavorite ? (
            <Star className="text-neutral-200 drop-shadow hover:text-yellow-400 w-6 h-6 transition-all duration-300" />
          ) : (
            <StarOff className="text-neutral-200 drop-shado w-6 h-6 transition-all duration-300" />
          )}
        </button>
      </div>
    </>
  );
}

export default FavButton;

//
// Req para a db pra retornar o user
// pega o array de favoritos
// verifica se o title esta nos favoritos baseado na prop da id
// se estiver retorna o icone para desfavoritas
//
// rotas:
// favorito -> rota para desfavoritar
// nao-favorito -> rota para favoritar
