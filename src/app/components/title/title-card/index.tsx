/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SearchResults } from "../title-results";

function TitleCard({ result }: { result: SearchResults }) {
  return (
    <div className="mb-3">
      <Link
        href={`/${result.Type}/${result.imdbID}`}
        title={`Visualizar ${result.Title}`}
      >
        <div className="relative hover:scale-105 transition-transform duration-300">
          <img
            src={
              result.Poster === "N/A" ? "/placeholderPoster.jpg" : result.Poster
            }
            alt="Poster"
            className="h-auto sm:max-w-[175px] max-w-[233.33px] aspect-2/3
                    shadow-md hover:shadow-lg dark:hover:shadow-lg
                    transition-transform duration-300 rounded-lg"
            // onError={(e) => (e.target.src = "/placeholderPoster.jpg")}
            loading="lazy"
          />

          {/* Blur Effect */}
          <div
            className="absolute bottom-0 left-0 right-0
                    p-14 bg-black/40 blur-[5px]"
          />

          <div className="absolute bottom-0 left-0 right-0 rounded p-4">
            <p className="text-sm text-neutral-200 font-bold shadow-sm">
              {result.Title}
            </p>
            <p className="text-xs text-neutral-400 font-semibold shadow-sm">
              {result.Year}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TitleCard;
