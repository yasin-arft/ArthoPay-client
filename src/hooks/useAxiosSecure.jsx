import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_Server_baseURL
})

const useAxiosSecure = () => {
  
  return axiosSecure;
};

export default useAxiosSecure;