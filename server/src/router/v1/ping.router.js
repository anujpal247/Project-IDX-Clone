import { Router } from "express";

const pingRouter = Router();

pingRouter.get("/", (req, res) => {
  res.status(200).send("pong");
});

export default pingRouter;