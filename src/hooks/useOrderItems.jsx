import { useQuery } from "@tanstack/react-query";
import useMyBookings from "./useMyBookings";
import useAxiosSecure from "./useAxiosSecure";



const useOrderItems = () => {

    const [myBookings] = useMyBookings();
    const axiosSecure = useAxiosSecure();



    const { data: orderItems = [] } = useQuery({
        queryKey: ['orderItems'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myBooking/orderItems`, {
                params: {
                    foodIds: myBookings
                }
            })
            return res.data;
        }
    })

    return [orderItems]
};

export default useOrderItems;