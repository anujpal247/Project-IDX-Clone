import { Router } from "express";
import pingRouter from "./ping.routes.js";
import projectRouter from "./project.routes.js";

const v1Router = Router();

v1Router.use("/ping", pingRouter);
v1Router.use("/projects", projectRouter);

export default v1Router;