import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";
import { axiosSecure } from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const ConfirmOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    console.log(user)
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    const onSubmit = async (data) => {
        console.log(data);
        reset();
        const orderInfo = {
            totalPayableBill: totalPrice,
            email: user?.email,
            name: user?.displayName,
            // transactionId: paymentIntent.id,
            data: new Date(), // Todo update date according to utc using moment js
            foodImages: cart.map(item => item.image),
            cartIds: cart.map(item => item._id),
            foodIds: cart.map(item => item.foodId),
            status: 'pending',
            billingStatus: 'Unpaid',
        }
        const res = await axiosSecure.post('/cashAndDelivery', orderInfo)
        // console.log('save payments info', res)
        console.log('order info', res)
        if (res.data.orderConfirm.insertedId) {
            refetch()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Order is Confirm",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div>
            <div className="mb-6">
                <SectionTitle
                    header="Confirm Your Order"
                    subHeader="Cash And Delivery"
                ></SectionTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="w-full flex gap-2">
                <input className="input input-bordered w-1/2" defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} />
                <input className="input input-bordered w-1/2"  defaultValue={user?.email} {...register("email")} />
                </div>
               <div className="w-full flex gap-2">
               <div className="w-1/2">
               <div className="label">
                    <span className="label-text">Delivery Address:</span>
                   
                </div>
                <textarea className="textarea textarea-bordered h-12 w-full " placeholder="Address" {...register("address", { required: true })}></textarea>
               </div>
               <div className="w-1/2">
               <div className="label">
                    <span className="label-text">Contact:</span>
                   
                </div>

               <input className="input input-bordered w-full"  placeholder="Phone Number" {...register("phone",  { required: true })} />

               </div>
               </div>
              
               <div>
               <h2>Total Payable Bill: ${totalPrice}</h2>
               <h2>Total Items: {cart.length}</h2>
               </div>


                <div className="text-center">
                    <button className="btn btn-primary mt-8  px-8" type="submit" disabled={!(totalPrice > 0)}>
                        Place Order
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ConfirmOrder;