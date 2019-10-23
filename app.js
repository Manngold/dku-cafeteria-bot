import express from "express";
import helmet from "helmet";
import { scrapper } from "./feature/scrapper";
import { getDate } from "./feature/loader";
import { menu } from "./db";
const app = express();

app.use(helmet());
// setInterval(getDate, 3000);
app.get("/", (req, res) => scrapper());

export default app;
