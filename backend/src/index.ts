import express from "express";
import cors from "cors";
import database from "./database/connection";
import TaskTag from "./model/taskTag.model";
import Task from "./model/task.model";
import Tag from "./model/tag.model";
import routers from "./router/index.router";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routers)

app.listen(port, () => {
  console.log(`Servidor iniciado no port ${port}`);
});

database
  .sync({ force: true })
  .then(() => {
    console.log(`Servidor iniciado com sucesso`);
    TaskTag.sync();
    Task.sync()
    Tag.sync()
  })
  .catch((error) => console.error(`Erro ao iniciar servidor: ${error}`));
