import express from "express";
import cors from "cors";
import { PORT } from "./config/index.js";
import apiRouter from "./router/index.js";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRouter);


app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
});

