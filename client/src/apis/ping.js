import { axiosInstance } from "../config/axios.config";


export const pingApi = async () => {
  try {
    const response = await axiosInstance.get("/ping");
    console.log("api response", response.data);
    return response.data;
  } catch (error) {
    console.log("api error", error);
    throw error;
  }
}