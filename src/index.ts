import express from "express";
import cors from "cors";
import database from "./database/connection";
import { routers } from "./router/index.router";
import * as dotenv from "dotenv";

dotenv.config()
const app = express();
const port = process.env.PORT;
const dbName = process.env.DB_NAME;
const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", routers);

app.listen(port, () => {
  console.log(`Server starting at port ${port}`);
});

database
  .sync()
  .then(() => {
    console.log(`Server started successfully. Database name: ${dbName}`);
  })
  .catch((error) => console.error(`Server Error: ${error}`));
