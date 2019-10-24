import express from "express";
import helmet from "helmet";
import { isUpdated } from "./feature/loader";
const app = express();

app.use(helmet());

setInterval(isUpdated, 5000);

export default app;
