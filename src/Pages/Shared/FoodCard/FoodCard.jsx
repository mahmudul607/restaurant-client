import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";




const FoodCard = ({foodItem}) => {
    const {name, image, price, recipe} = foodItem;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch]= useCart()
    const handleAddToCart =(item)=>{

        if(user && user.email){
           const foodItem ={
            foodId: item._id,
            email: user.email,
            name:item.name,
            image: item.image,
            price: item.price
           }
           console.log(location)
          
           
                    axiosSecure.post('/carts', foodItem)
                    .then(()=>{
                        Swal.fire({
                            title: "Added To Your Cart!",
                            text: "Your Selected Menu has been added.",
                            icon: "success"
                          });
                        //   refetch data after add product
                          refetch();
                          
                    })
                
             

         


        }else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login for add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from :location}})
                }
              });
            
        }
        
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-1/2">
                <img src={image} alt="images" className="rounded-xl h-full w-full" />
                
            </figure>
            <p className="absolute top-12 right-16 bg-black text-white p-2">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={()=>{handleAddToCart(foodItem)}} className="btn btn-outline border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;