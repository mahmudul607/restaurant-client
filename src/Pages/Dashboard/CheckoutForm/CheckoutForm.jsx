import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const [errorMessage, setErrorMessage] =useState();
    const stripe = useStripe();
    const elements = useElements();
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
            <div className="text-center">
            <button className="btn btn-primary mt-8  px-8" type="submit" disabled={!stripe}>
                Pay
            </button>
            </div>

        </form>
    );
};

export default CheckoutForm;