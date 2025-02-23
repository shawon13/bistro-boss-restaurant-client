
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom'
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)
    return (
        <section className='py-10'>
            <div className='container max-w-screen-md mx-auto'>
                <SectionTitle heading='Payment' subHeading='Please pay to eat'></SectionTitle>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom></CheckoutFrom>
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;