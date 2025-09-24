import { axiosInstance } from "../config/axios.config";

export const createProjectApi = async () => {
  try {
    const response = await axiosInstance.post("/projects");
    console.log("api response", response.data);
    return response.data;
  } catch (error) {
    console.log("api error", error);
    throw error;
  }
}