import mongoose from "mongoose";

const DB_URI = process.env.DB_URI as string;
if (!DB_URI) throw new Error("DB_URI undefined.");

const db = {
  connect: async (): Promise<void> => {
    try {
      await mongoose.connect(DB_URI);

      // console.log('Connected to MongoDB');
    } catch (error) {
      console.log('Error connecting to MongoDB: ', error);
    }
  },
  disconnect: async (): Promise<void> => {
    try {
      await mongoose.connection.close();

      // console.log('Disconnected from MongoDB');
    } catch (error) {
      console.log('Error disconnecting from MongoDB:', error)
    }
  }
};

export default db;