import express from "express";
import { student, professor, dormitory } from "./controller";
import routes from "./routes";
const apiRouter = express.Router();

apiRouter.post(routes.student, student);
apiRouter.post(routes.professor, professor);
apiRouter.post(routes.dormitory, dormitory);

export default apiRouter;
