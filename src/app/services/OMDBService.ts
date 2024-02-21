import { OMDB } from "./api";
require("dotenv").config();
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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

type SearchResults = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type SuccessfulResponseSearch = {
  Search: SearchResults[];
  totalResults: string;
  Response: "True";
};

type FailedResponse = {
  Response: "False";
  Error: string;
};

type ApiResponse = SuccessfulResponse | FailedResponse;

type ApiResponseSearch = SuccessfulResponseSearch | FailedResponse;

const OMDBService = {
  searchTitle: async (
    query: string,
    page: string
  ): Promise<ApiResponseSearch> => {
    try {
      const res = await OMDB.get(`/?apikey=${API_KEY}&s=${query}&page=${page}`);
      const data = res.data;
      return data;
    } catch (error: any) {
      console.log("Error searching for title: ", error.message);
      return error.message;
    }
  },
  getTitle: async (imdbID: string): Promise<ApiResponse> => {
    try {
      const res = await OMDB.get(`?apikey=${API_KEY}&i=${imdbID}&plot=full`);
      const data = res.data;
      return data;
    } catch (error: any) {
      console.log("Error getting the title: ", error.message);
      return error.message;
    }
  },
};

export default OMDBService;
