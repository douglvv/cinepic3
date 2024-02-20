import APIService from "@/app/services/APIService";
import FavoriteCard from "../favorites-card";

export type Favorite = {
  imdbID: string;
  _id: string;
  posterUrl: string;
};

type User = {
  externalId: string;
  favorites: Favorite[];
};

async function FavoritesResults({ id }: { id: string | null }) {
  if (!id) return null;

  const res = await APIService.getUser(id);

  return (
    <>
      {res.data && res.data.favorites.length > 0 ? (
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
          {res.data.favorites.map((item: Favorite, i: number) => (
            <FavoriteCard item={item} key={item.imdbID} />
          ))}
        </div>
      ) : (
        <div
          className="flex justify-center items-center mx-4 md:mx-8 w-full mt-3
         text-neutral-600 text-sm dark:text-neutral-400"
        >
          <p>Nothing here yet.</p>
        </div>
      )}
    </>
  );
}
export default FavoritesResults;
