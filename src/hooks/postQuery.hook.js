import { useState } from "react";
import apiClient from "../apis/apiClient";

const usePostQuery = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const postQuery = async (params) => {
    const {
      url,
      onSuccess = () => {},
      onFail = () => {},
      postData = {},
      headers = {},
    } = params;
    setLoading(true);
    try {
      const { data: apiData = {} } = await apiClient.post(url, postData, {
        headers: headers,
      });
      if (apiData?.status === "failed") {
        return;
      }
      setData(apiData?.data);
      await onSuccess(apiData?.data);
      console.log(apiData, "postQuery-success");
    } catch (err) {
      onFail(err);
      console.log(err, "postQuery-fail");
      setError(err?.data?.result?.errText);
    } finally {
      setLoading(false);
    }
  };

  return {
    postQuery,
    loading,
    setLoading,
    data,
    setData,
    error,
    setError,
  };
};

export default usePostQuery;
