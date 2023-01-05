import axios from "axios";

const axiosApiInstance = axios.create();

const url = process.env.NODE_ENV === "development"? "http://localhot:5000": "https://user-api.onrender.com";

axiosApiInstance.defaults.baseURL = url;
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;