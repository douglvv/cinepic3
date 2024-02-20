/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Favorite } from "../favorites-results";

function FavoriteCard({ item }: { item: Favorite }) {
  return (
    <>
      <div className="mb-3">
        <Link
          href={`/title/${item.imdbID}`}
          //   title={`Visualizar`}
        >
          <div className="relative hover:scale-105 transition-transform duration-300">
            <img
              src={
                item.posterUrl === "N/A"
                  ? "/placeholderPoster.jpg"
                  : item.posterUrl
              }
              alt="Poster"
              className="h-auto sm:max-w-[175px] max-w-[233.33px] aspect-2/3
                    shadow-md hover:shadow-lg dark:hover:shadow-lg
                    transition-transform duration-300 rounded-lg"
              loading="lazy"
            />

            {/* Blur Effect */}
            <div
              className="absolute bottom-0 left-0 right-0
                    p-14 bg-black/40 blur-[5px]"
            />
          </div>
        </Link>
      </div>
    </>
  );
}

export default FavoriteCard;
