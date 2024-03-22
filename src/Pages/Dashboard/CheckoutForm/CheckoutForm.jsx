import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { axiosSecure } from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = () => {
    const [errorMessage, setErrorMessage] =useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const {user} =useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item)=> total + item.price ,0);
    console.log(cart);

useEffect(()=>{

    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res =>{
        setClientSecret(res.data.clientSecret);
        console.log(res.data);
    })

},[totalPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe && !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(!card){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            setErrorMessage(error.message)
            console.log('[error]', error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMessage(null);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment Successful",
                showConfirmButton: false,
                timer: 1500
              });
          }
        //   confirm payment

        const {paymentIntent, error:cardConfirmErr} = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if(cardConfirmErr){
            console.log(cardConfirmErr, 'Inside cardConfirm')
            setErrorMessage(cardConfirmErr)
        }else{
            console.log('Inside cardConfirm paymentIntent', paymentIntent);
            setTransactionId(paymentIntent.id);
            // save payment data to the server 

            const payment = {
                email: user?.email,
                name:user?.displayName,
                transactionId: paymentIntent.id,
                data: new Date(), // Todo update date according to utc using moment js
                cartIds: cart.map(item => item._id),
                foodIds: cart.map(item => item.foodId),
                status: 'pending',
                billingStatus: 'paid',
            }
            const res = await axiosSecure.post('/payments', payment)
            console.log('save payments info', res)


        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="text-red-600 mt-6">{errorMessage}</div>
            <div>
                {
                    transactionId && <p>Your Transaction Id:<span  className="text-green-600">{transactionId}</span></p>
                }
            </div>
            <div className="text-center">
            <button className="btn btn-primary mt-8  px-8" type="submit" disabled={!stripe && !clientSecret }>
                Pay
            </button>
            </div>

        </form>
    );
};

export default CheckoutForm;