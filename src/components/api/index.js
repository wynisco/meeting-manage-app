import axios from "axios";

const route = "https://zoom-apis-t8kv-hb1007.vercel.app";
const headers = {
  Authorization:
    "Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjFlZjBjZjZlLTIwMmYtNGY4Mi1iN2Y4LTM1Mjk4ZjZmNGY1MyJ9.eyJ2ZXIiOjksImF1aWQiOiI1ZTFjYWU3ZTFhNWZlMjJmYjk1ODliNjg2ZGIxZmJlYyIsImNvZGUiOiJDem42SnlaS0R4YmRPVzZuaGtVUklHSGdfaFk0STZlbUEiLCJpc3MiOiJ6bTpjaWQ6Tk9QNGdQUkRSVHlxaU0yRnE3WlB1dyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJkcGlZVGlDTVFBZVZSR0xiUFlwb2xBIiwibmJmIjoxNjgyNTE1NzMyLCJleHAiOjE2ODI1MTkzMzIsImlhdCI6MTY4MjUxNTczMiwiYWlkIjoiVVF5M2JIODBTUXE4a21tWnJjdzJRZyJ9.0v_ZzZc5xwtdATT2WvzIpYbJd99_Fx4vCiRexJ3gSh8akkbUYPfvtVxw_J3RJsVk11Y5t03sKXpefTa6P0rMLA",
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
