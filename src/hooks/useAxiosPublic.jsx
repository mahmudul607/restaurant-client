import axios from "axios";

const  axiosPublic = axios.create({
    baseURL: "https://food-corner-bongo.vercel.app",

})




const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;