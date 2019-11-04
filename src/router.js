import express from "express";
import { student, professor, dormitory } from "./controller";
const apiRouter = express.Router();

apiRouter.post("/student", student);
apiRouter.post("/professor", professor);
apiRouter.post("/dormitory", dormitory);

export default apiRouter;
