import { API_URL } from "../config/constants";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
    async config => {         
  
      config.headers = {
        Accept: "text/plain",
        "Content-Type": "application/json",
      };      
      
      return config;
    },
    error => {
      Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    response => response,

    async error => {      

      const originalRequest = error.config;           
            
      console.log(error);
      return Promise.reject(error);
    },
);
  
export default axiosInstance;