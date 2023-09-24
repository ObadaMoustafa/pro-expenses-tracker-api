import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/connectDB.js";
import { app } from "../api.js";

const port = process.env.PORT;
if (!port) {
  throw new Error(`port is ${port} it seems you forgot to create env file`);
}

async function startServer() {
  try {
    connectDB();
    app.listen(port, () => console.log(`server is running in port ${port}`));
  } catch (error) {
    console.error(error);
  }
}

startServer();
