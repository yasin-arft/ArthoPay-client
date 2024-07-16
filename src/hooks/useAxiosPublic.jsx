import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_Server_baseURL
})

const useAxiosPublic = () => {
  
  return axiosPublic;
};

export default useAxiosPublic;