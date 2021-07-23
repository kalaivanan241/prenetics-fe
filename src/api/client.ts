import { create } from "apisauce";
import { getToken } from "../utils/storage";

let baseURL;
if (process.env.NODE_ENV !== "development") {
  baseURL = process.env.REACT_APP_API_SERVER;
} else {
  baseURL = process.env.REACT_APP_API_SERVER;
}

if (!baseURL) {
  baseURL = "http://localhost:8000/api/";
}

const apiClient = create({
  baseURL: `${baseURL}`,
});

apiClient.addRequestTransform((request) => {
  const authToken = getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;
