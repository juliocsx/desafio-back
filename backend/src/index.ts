import express from "express";
import cors from "cors";
import database from "./database/connection";
import routers from "./router/index.router";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', routers)

app.listen(port, () => {
  console.log(`Server starting at port ${port}`);
});

database
  .sync()
  .then(() => {
    console.log(`Server started successfully`);
  })
  .catch((error) => console.error(`Server Error: ${error}`));
