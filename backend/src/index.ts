import express from "express";
import cors from "cors";
import database from "./database/connection";
import TaskTag from "./model/taskTag.model";
import User from "./model/user.model";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));


app.listen(port, () => {
  console.log(`Servidor iniciado no port ${port}`);
});

database
  .sync()
  .then(() => {
    console.log(`Servidor iniciado com sucesso`);
    TaskTag.sync();
    User.sync();
  })
  .catch((error) => console.error(`Erro ao iniciar servidor: ${error}`));
