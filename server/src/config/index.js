import dotenv from "dotenv"

function loadEnv(){
  console.log("env variable loaded!");
  dotenv.config();
}

loadEnv();

export const PORT = process.env.PORT