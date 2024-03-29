import mongoose, { Schema } from "mongoose";

type favorites = {
  imdbID: string | null | undefined,
  posterUrl: string | null | undefined
}

export interface IUser {
  externalId: string;
  favorites: Array<favorites>;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    externalId: {
      type: String,
      required: true,
      unique: true,
      
    },
    favorites: [
      {
        imdbID: {
          type: String,
        },
        posterUrl: {
          type: String,
          default: ""
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
