import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () =>{
    const axiosSecure = useAxiosSecure();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
   
    // useEffect(()=>{
    //     fetch('https://food-corner-bongo.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data)
    //         setLoading(false);
    //     })
    // },[])
    const {data:menu=[], isPending: loading, refetch} = useQuery ({
        queryKey:['menu'],
        queryFn: async () =>{

            const res = await axiosSecure.get("/menu")
            return res.data;

        }
    })

    

    return [menu, loading, refetch]

}

export default useMenu;