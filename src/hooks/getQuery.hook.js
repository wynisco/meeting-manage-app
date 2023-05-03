import { useState } from "react";
import apiClient from "../apis/apiClient";

const useGetQuery = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getQuery = async (params) => {
    const { url = "", onSuccess = () => {}, onFail = () => {}, options = {} } = params;
    setLoading(true);
    try {
      const { data: apiData = {} } = await apiClient.get(url, options);
      const result = apiData?.result || apiData?.data;
      setData(apiData);
      await onSuccess(apiData);
      return apiData;
    } catch (err) {
      onFail(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    getQuery,
    loading,
    setLoading,
    data,
    setData,
    error,
    setError,
  };
};

export default useGetQuery;
