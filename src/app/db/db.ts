import mongoose, { disconnect } from "mongoose";
require('dotenv').config();

const DB_URI = process.env.DB_URI as string;
if (!DB_URI) throw new Error("DB_URI undefined.");

const db = {
  connect: async () => {
    try {
      await mongoose.connect(DB_URI);

      console.log('Connected to MongoDB');
    } catch (error) {
      console.log('Error connecting to MongoDB: ', error);
    }
  },
  disconnect: async () => {
    try {
      await mongoose.disconnect();

      console.log('Disconnected to MongoDB');
    } catch (error) {
      console.log('Error disconnection to MongoDB:', error)
    }
  }
};

export default db;