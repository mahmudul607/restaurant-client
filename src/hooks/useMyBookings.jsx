import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useMyBookings = () => {
    
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();


    const {refetch, data: foodIds=[]} = useQuery({
        queryKey: ['myBookings', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/myBooking?email=${user.email}`)
            const foodIds = res.data.reduce((accumulator, booking) => {
                return accumulator.concat(booking.foodIds);
              }, []);
           
          
             
             
            return foodIds;
        }

    })
    const { data: foodImage=[]} = useQuery({
        queryKey: ['myBookings', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/myBooking?email=${user.email}`)
            const foodImage = res.data.reduce((accumulator, foodImages) => {
                return accumulator.concat(foodImages.foodImage);
              }, []);
           
          
             
             
            return foodImage;
        }

    })
    return [foodIds, refetch, foodImage]
};

export default useMyBookings;