import { Router } from "express";
import { pingController } from "../../controllers/ping.controller.js";

const pingRouter = Router();

pingRouter.get("/", pingController);

export default pingRouter;