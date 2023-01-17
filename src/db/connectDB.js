import mongoose from "mongoose";
mongoose.set("strictQuery", true);

export const connectDB = () => mongoose.connect(process.env.MONGODB_URI);
export const dropDb = () =>
  mongoose.createConnection(process.env.MONGODB_URI).close();
export const disconnectDb = () => mongoose.disconnect();
