import apiConfig from "@/Config/api.config";
import axios from "axios";

export const getAxiosInstance = (baseUrl: string = "") => {
  const baseURL = baseUrl || apiConfig.apiHost;
  return axios.create({
    baseURL,
    // timeout: 10000,
    withCredentials: true,
  });
};
const apiInstance = getAxiosInstance();

export default apiInstance;
