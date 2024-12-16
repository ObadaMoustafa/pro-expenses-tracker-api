import dotenv from 'dotenv';
dotenv.config();
import { app } from './src/app.js';
import { connectDB } from './src/db/connectDB.js';

const port = process.env.PORT;
if (port === null) {
  throw new Error('port is null it seems you forgot to create env file');
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
