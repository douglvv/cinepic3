import { API } from "./api";


type Favorite = {
  imdbID: string;
  _id: string;
  posterUrl: string;
};

type User = {
  externalId: string;
  favorites: Favorite[];
};


const APIService = {
  createAccount: async (id: string) => {
    return await API.post(`/create`, { id: id });
  },
  getUser: async (id: string) => {
    return await API.get<User>(`/getUser/${id}`);
  },
  //   addToFavorites: async ({ username, imdbID }) => {
  //     return await API.post(`/${username}/addTofavorites`, { imdbID: imdbID });
  //   },
  deleteAccount: async (id: string) => {
    return await API.delete("/deleteAccount", {
      data: { id: id },
    });
  },
};

export default APIService;
