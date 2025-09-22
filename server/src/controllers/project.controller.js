import child_process from "child_process";
import { promisify } from "util";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";

const execPromisified = promisify(child_process.exec);

export async function createProjectController(req, res) {
  // create unique id and then inside project folder a new folder with that id
  const projectId = uuidv4();

  console.log("projectId: ", projectId);
  await fs.mkdir(`./projects/${projectId}`);  // create project folder

  // run npm create vite@latest command inside newly created folder
  await execPromisified('npm create vite@latest sandbox -- --template react',
    { cwd: `./projects/${projectId}` }
  );

  res.status(200).json({
    message: "project created",
    projectId
  })
}