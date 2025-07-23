import axios from "axios";

const urlTest = import.meta.env.VITE_URL_TEST;
const urlDev = import.meta.env.VITE_URL_DEV;

const axiosInstance = axios.create({
    baseURL: `${urlDev}`,
    headers: {
        "Content-type": "application/json",
    }
})

export default axiosInstance;