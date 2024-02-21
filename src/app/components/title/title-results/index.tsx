import axios from "axios";
import TitleCard from "../title-card";
import PaginationControls from "../../pagination-controls";
import OMDBService from "@/app/services/OMDBService";

export type SearchResults = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type SuccessfulResponse = {
  Search: SearchResults[];
  totalResults: string;
  Response: "True";
};

export type FailedResponse = {
  Response: "False";
  Error: string;
};

type ApiResponse = SuccessfulResponse | FailedResponse;

async function TitleResults({
  query,
  currentPage,
}: {
  query: string;
  currentPage: string;
}) {
  const res = await OMDBService.searchTitle(query, currentPage);

  return (
    <>
      {res.Response === "False" ? (
        <div
          className="flex justify-center mx-4 md:mx-8 w-full mt-3
         text-neutral-600 text-sm dark:text-neutral-400"
        >
          <p>No results found. Please try again</p>
        </div>
      ) : (
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
          {res.Search.map((result: SearchResults, i: number) => (
            <TitleCard result={result} key={i} />
          ))}

          <PaginationControls
            currentPage={currentPage}
            perPage={"10"}
            totalResults={res.totalResults}
            query={query}
          />
        </div>
      )}
    </>
  );
}

export default TitleResults;
