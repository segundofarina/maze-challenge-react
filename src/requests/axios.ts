import axios from "axios";

const apiURL = "http://www.mocky.io/v2/";

const axiosInstance = axios.create({
  baseURL: apiURL,
  responseType: "json",
  headers: {
    get: { "Content-Type": "application/json" },
  },
});

export default axiosInstance;
