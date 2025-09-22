import { Router } from "express";
import { createProjectController } from "../../controllers/project.controller.js";

const projectRouter = Router();

projectRouter.post("/", createProjectController);

export default projectRouter;