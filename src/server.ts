import express from 'express';

import "./database"; //o Node reconhece automaticamente o arquivo "index.*" contido na pasta e carrega
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));