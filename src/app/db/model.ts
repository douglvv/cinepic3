import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
