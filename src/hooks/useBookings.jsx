import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useBookings = () => {
    const axiosSecure = useAxiosSecure();

    const {refetch, data: bookings=[]} = useQuery({
        queryKey:['bookings'],
        queryFn: async () =>{
            const res = await axiosSecure.get("/bookings");
            return res.data;

        }
    })
    return [bookings, refetch]
};

export default useBookings;