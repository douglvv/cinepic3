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
    return await API.post(`/createAccount`, { id: id });
  },
  getUser: async (id: string) => {
    try {
      return await API.get<User>(`/getUser/${id}`);
    } catch (error: any) {
      return error
    }
  },
  deleteAccount: async (id: string) => {
    return await API.delete("/deleteAccount", {
      data: { id: id },
    });
  },
  addtoFavorites: async ({
    id,
    imdbID,
    posterUrl,
  }: {
    id: string;
    imdbID: string;
    posterUrl: string;
  }) => {
    return await API.post("/addToFavorites", {
      id: id,
      imdbID: imdbID,
      posterUrl: posterUrl,
    });
  },
  removeFromFavorites: async ({
    id,
    imdbID,
  }: {
    id: string;
    imdbID: string;
  }) => {
    return await API.post("/removeFromFavorites", {
      id: id,
      imdbID: imdbID,
    });
  },
};

export default APIService;
