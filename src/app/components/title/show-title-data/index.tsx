/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import type { FailedResponse } from "../title-results";
import { redirect } from "next/navigation";
import StarRating from "../../starts-rating";
import { Clock10 } from "lucide-react";
import FavButton from "../../fav-button";
import OMDBService from "@/app/services/OMDBService";

type Rating = {
  Source: string;
  Value: string;
};

type SuccessfulResponse = {
  Title: string;
  Year: string;
  totalSeasons?: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [Rating];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True";
};

type ApiResponse = SuccessfulResponse | FailedResponse;

async function ShowTitleData({ imdbID }: { imdbID: string }) {
  const res = await OMDBService.getTitle(imdbID);

  return (
    <>
      {res.Response === "False" ? (
        redirect("/not-found")
      ) : (
        <>
          <div className="mx-3 flex justify-center">
            <img
              src={
                res.Poster === "N/A"
                  ? "/placeholderPoster.jpg"
                  : res.Poster
              }
              alt="Poster"
              className="h-auto max-w-[250px] max-h-[375px] aspect-2/3 shadow-lg rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col max-w-2xl gap-2 mx-3">
            <div className="flex justify-between">
              <h1 className="font-semibold text-4xl drop-shadow-sm text-neutral-200">
                {res.Title}
              </h1>

              <FavButton imdbID={imdbID} posterUrl={res.Poster} />
            </div>

            <div className="flex flex-row gap-6 text-neutral-300">
              <h3 className="text-xs md:text-sm font-thin tracking-wider">
                {res.Year}
              </h3>
              {res.totalSeasons && (
                <h3 className="text-xs md:text-sm font-thin tracking-wider">
                  Seasons: {res.totalSeasons}
                </h3>
              )}
              <div className="flex gap-1">
                <Clock10 size={20} strokeWidth={1} />
                <h3 className="text-xs md:text-sm font-thin tracking-wider">
                  {res.Runtime}
                </h3>
              </div>
              <div className="flex gap-2">
                <h3 className="text-xs md:text-sm font-thin tracking-wider">
                  {res.imdbRating}
                  <small className="dark:text-neutral-400 text-neutral-500 italic">
                    /10
                  </small>
                </h3>
                <StarRating percentage={parseFloat(res.imdbRating) * 10} />
              </div>
            </div>

            <div className="flex flex-row gap-6 mb-6 text-neutral-300">
              <h3 className="text-xs md:text-sm font-thin tracking-wider -mx-1">
                {res.Genre?.split(", ").map((item, index) => (
                  <span
                    key={index}
                    className="inline-block whitespace-nowrap bg-neutral-500/40
                    rounded-lg mr-2 p-[0.33rem] text-xs font-semibold text-center
                    align-baseline leading-none"
                  >
                    {item}
                  </span>
                ))}
              </h3>
            </div>

            <div className="flex flex-row gap-6 text-neutral-300">
              <h3 className="text-xs md:text-sm font-thin tracking-wider">
                Director:{" "}
                <span className="font-medium">{res.Director}</span>
              </h3>
            </div>

            <div className="flex flex-row gap-6 text-neutral-300">
              <h3 className="text-xs md:text-sm font-thin tracking-wider">
                Actors: <span className="font-medium">{res.Actors}</span>
              </h3>
            </div>

            <div className="flex flex-row mt-6">
              <h6 className="font-thin tracking-wider text-xs md:text-sm text-neutral-200">
                {res.Plot}
              </h6>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShowTitleData;
