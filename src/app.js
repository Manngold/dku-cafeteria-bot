import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import apiRouter from "./router";
import { menuUpdater } from "./feature/updater";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use("/api", apiRouter);
menuUpdater();
setInterval(menuUpdater, 300000);

export default app;
