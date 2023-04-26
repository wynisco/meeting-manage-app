import axios from "axios";
import { apiBaseUrl } from "./urls";
import axiosRetry from "axios-retry";

const apiInstance = () => {
  const api = axios.create({
    baseURL: apiBaseUrl,
  });
  axiosRetry(api, { retries: 3 });

  api.interceptors.request.use(async (config) => {
    let accessToken =
      "eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjdkYjA3MDVlLTdjNWItNDM3Zi05N2I4LTBjNjk2NDcxY2Q5OSJ9.eyJ2ZXIiOjksImF1aWQiOiI1ZTFjYWU3ZTFhNWZlMjJmYjk1ODliNjg2ZGIxZmJlYyIsImNvZGUiOiJ3YTcxUTlxTXdPbXFfTi1sYkFEUUh5ZWY3b0pkYVFISlEiLCJpc3MiOiJ6bTpjaWQ6Tk9QNGdQUkRSVHlxaU0yRnE3WlB1dyIsImdubyI6MCwidHlwZSI6MCwidGlkIjoyLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJkcGlZVGlDTVFBZVZSR0xiUFlwb2xBIiwibmJmIjoxNjgyNTMxOTM5LCJleHAiOjE2ODI1MzU1MzksImlhdCI6MTY4MjUzMTkzOSwiYWlkIjoiVVF5M2JIODBTUXE4a21tWnJjdzJRZyJ9.j5e4z9r9pzJRc0QCW94tip8LS6nusNLLfDlLiP6sfw4PMXRpgAOfJVrCcyniJFnsKDwpcRuPbQQscnihww8Uww";
    //await getItem(asyncStorageConstants.accessToken);
    if (accessToken) {
      if (config.method !== "OPTIONS") {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
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
