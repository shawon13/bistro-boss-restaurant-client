import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios'
import useCart from '../../../hooks/useCart'
import useAuth from '../../../hooks/useAuth';
const CheckoutFrom = () => {
    const { user } = useAuth();
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)

            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setError(error.message)
        }
        else {
            console.log('[paymentMethod]', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log(confirmError.message)
        }
        else {
            console.log('payment intent', paymentIntent)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='text-center'>
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
            <button disabled={!stripe || !clientSecret} type="submit" className='mt-10 btn btn-neutral w-[412px]'>
                Pay
            </button>
            <p className='text-red-600'>{error}</p>
        </form>
    );
};

export default CheckoutFrom;