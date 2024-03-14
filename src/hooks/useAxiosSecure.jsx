import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const  axiosSecure = axios.create({
    baseURL: "http://localhost:5000"

})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOutUser} = useAuth();
 
    axiosSecure.interceptors.request.use(function (config) {
      // Do something before request is sent
      const token = localStorage.getItem('access-token');
      // console.log("intercepter token:", token)
      config.headers.authorization = `Bearer ${token}`
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response){
      return response;
    },async (error) => {
      const status = error.response.status;
      if(status === 401 || status === 403){
          await logOutUser();
          navigate('/login');
      }
      return Promise.reject(error);
    })
 
    return axiosSecure;
    
};

export default useAxiosSecure;