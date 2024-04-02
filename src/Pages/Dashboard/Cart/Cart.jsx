
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";



const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }

                    })

            }
        });

    }



    return (
        <div >
            <div className="cart-title">
                <SectionTitle
                  subHeader="My-Cart"
                  header="Wanna and more?"
                ></SectionTitle>
            </div>
            <div className="cart-details">
                <div className="total text-4xl flex justify-between font-bold py-8">
                    <h2>Total Orders: {cart.length} </h2>
                    <h2>Total Price: {totalPrice}</h2>
                   {
                    cart.length ?  <Link to={"/dashboard/payment"}>
                    <button className="btn btn-primary">Pay</button>
                    </Link>
                     :
                    <button disabled className="btn btn-primary">Pay</button>
                   }
                   {
                    cart.length ? <Link to={"/dashboard/confirmOrder"}><button className="btn btn-primary">Cash On Delivery</button></Link>:<button disabled className="btn btn-primary">Cash On Delivery</button>
                   }
                </div>

                <div className="">
                    <table className="table ">
                        {/* head */}
                        <thead className="uppercase text-lg font-bold bg-gray-400 text-black ">


                            <tr className="">
                                <th className="font-bold rounded-tl-2xl">

                                </th>
                                <th className="font-bold ">Item Image</th>
                                <th>Item Name</th>
                                <th>price</th>
                                <th className="rounded-tr-2xl">Action</th>
                            </tr>


                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        
                                            {index + 1}
                                        
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>

                                        {item.name}

                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn  btn-ghost btn-lg text-2xl  "


                                        ><RiDeleteBin6Line className="text-red-600" /> </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                        {/* foot */}


                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;