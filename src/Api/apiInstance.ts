import apiConfig from "@/Config/api.config";
import axios from "axios";

export const getAxiosInstance = (baseUrl: string = "http://localhost:3003") => {
  const baseURL = baseUrl || apiConfig.apiHost;
  return axios.create({
    baseURL,
    headers: {
      authorization: localStorage.getItem("token") || '',
    },
    // timeout: 10000,
    // withCredentials: true,
  });
};
const apiInstance = getAxiosInstance();

export default apiInstance;
