import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_Server_baseURL
})

const useAxiosPublic = () => {
  
  return axiosSecure;
};

export default useAxiosPublic;