import axios from "axios";

const axiosApiInstance = axios.create();

const url = process.env.NODE_ENV === "development"? "http://localhost:5000": "https://user-api-czc0.onrender.com";

axiosApiInstance.defaults.baseURL = url;
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;