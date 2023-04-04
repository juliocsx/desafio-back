import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*"
}

app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Servidor iniciado no port ${port}`);
});