import axios from "axios";

const route = "https://zoom-apis-t8kv-hb1007.vercel.app";
const headers = {
  Authorization:
    "Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjdkYjA3MDVlLTdjNWItNDM3Zi05N2I4LTBjNjk2NDcxY2Q5OSJ9.eyJ2ZXIiOjksImF1aWQiOiI1ZTFjYWU3ZTFhNWZlMjJmYjk1ODliNjg2ZGIxZmJlYyIsImNvZGUiOiJ3YTcxUTlxTXdPbXFfTi1sYkFEUUh5ZWY3b0pkYVFISlEiLCJpc3MiOiJ6bTpjaWQ6Tk9QNGdQUkRSVHlxaU0yRnE3WlB1dyIsImdubyI6MCwidHlwZSI6MCwidGlkIjoyLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJkcGlZVGlDTVFBZVZSR0xiUFlwb2xBIiwibmJmIjoxNjgyNTMxOTM5LCJleHAiOjE2ODI1MzU1MzksImlhdCI6MTY4MjUzMTkzOSwiYWlkIjoiVVF5M2JIODBTUXE4a21tWnJjdzJRZyJ9.j5e4z9r9pzJRc0QCW94tip8LS6nusNLLfDlLiP6sfw4PMXRpgAOfJVrCcyniJFnsKDwpcRuPbQQscnihww8Uww",
};

const listMeets = async () => {
  const { data } = await axios.get(`${route}/api/v1/meetings`, {
    headers: headers,
  });
  return data;
};

const createMeets = async (body) => {
  const { data } = await axios.post(`${route}/api/v1/meetings`, body, {
    headers: headers,
  });
  return data;
};

const Apis = { listMeets, createMeets };
export default Apis;
