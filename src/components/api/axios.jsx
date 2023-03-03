import axios from "axios";
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
export default axios.create({
    baseURL: "http://localhost:8000",
    withCredentials:true,
});