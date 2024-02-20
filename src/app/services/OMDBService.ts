import { OMDB } from "./api";
require("dotenv").config();

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const OMDBService = {
  searchTitle: async (query:string, page:string) => {
    try {
      return await OMDB.get(`/?apikey=${API_KEY}&s=${query}&page=${page}`);
    } catch (error: any) {
      console.log("Error searching for title: ", error.message);
      return error.message;
    }
  },
  getTitle: async (imdbID:string) => {
    try {
      return await OMDB.get(`?apikey=${API_KEY}&i=${imdbID}&plot=full`);
    } catch (error: any) {
      console.log("Error getting the title: ", error.message);
      return error.message;
    }
  },
};

export default OMDBService;