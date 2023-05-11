import axios from "axios";
import { apiBaseUrl } from "./urls";
import axiosRetry from "axios-retry";

const apiInstance = () => {
  const api = axios.create({
    baseURL: apiBaseUrl,
  });
  axiosRetry(api, { retries: 3 });

  api.interceptors.request.use(async (config) => {
    console.log("REQUEST", config);
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      console.log("RESPONSE", response);
      return response;
    },
    (error) => {
      console.log("ERROR", error, error.response);
      throw error;
    }
  );

  return api;
};

const apiClient = apiInstance();

export default apiClient;
