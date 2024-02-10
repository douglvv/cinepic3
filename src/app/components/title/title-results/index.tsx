import axios from "axios";
import TitleCard from "../title-card";

export type SearchResults = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

type SuccessfulResponse = {
    Search: SearchResults[];
    totalResults: string;
    Response: "True"
}

type FailedResponse = {
    Response: "False"
    Error: string
}

type ApiResponse = SuccessfulResponse | FailedResponse

// TODO: Pagination usando o totalResults
async function TitleResults({
  query,
  currentPage,
}: {
  query: string;
  currentPage: string;
}) {
  const res = await axios.get<ApiResponse>(`https://www.omdbapi.com/?apikey=6b526007&s=${query}&page=${currentPage}`)

  return (
    <>
      {res.data.Response === "False" ? (
        <div className="flex justify-center mx-4 md:mx-8 w-full mt-3 text-neutral-600 text-sm dark:text-neutral-400">
          <p>No results found. Please try again</p>
        </div>
      ) : (
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
          {res.data.Search.map((result: SearchResults, i: number) => (
            <TitleCard result={result} key={i} />
          ))}
        </div>
      )}
    </>
  );
}

export default TitleResults;
