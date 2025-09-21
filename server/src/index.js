import express from "express";
import { PORT } from "./config/index.js";
import apiRouter from "./router/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);


app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
});

