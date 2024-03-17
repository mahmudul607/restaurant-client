
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key)
    
    return (
        <div>
            <SectionTitle
                header="Payment"
            />
            <div className="p-8">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
                
            </div>
        </div>
    );
};

export default Payment;
