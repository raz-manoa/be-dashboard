import apiConfig from "@/Config/api.config";
import axios from "axios";

export const getAxiosInstance = (baseUrl: string = "") => {
  const baseURL = 'http://localhost:1337/'; // baseUrl || apiConfig.apiHost;
  return axios.create({
    baseURL,
    headers: {
      authorization: localStorage.getItem('token')
    }
    // timeout: 10000,
    // withCredentials: true,
  });
};
const apiInstance = getAxiosInstance();

export default apiInstance;