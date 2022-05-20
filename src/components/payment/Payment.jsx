import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from '../checkoutproduct/CheckoutProduct';
import { useStateValue } from '../stateProvider/StateProvider'
import './payment.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer/Reducer';
import axios from '../axios'


const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState();
    const [succeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabaled, setDisabaled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        //generate the special stripe secret that allows to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('Secret is', clientSecret)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            setSucceeded(true)
            setError(null);
            setProcessing(false);
            navigate('/orders')

        })

    }
    const handleChange = async (e) => {
        // listen for change in CardElement
        // and display any errors as the customers type their card details
        setDisabaled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>
                    Checkout (<Link to='/checkout' style={{ textDecoration: 'none' }}>{basket.length} items</Link>)
                </h1>

                {/* div for delivery address */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>NSTU Road</p>
                        <p>Maijdee, Noakhali</p>

                    </div>
                </div>
                {/* div for review items */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment-items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>

                </div>
                {/* Payment method */}
                <div className='payment-section'>
                    <div className='paymnet-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment-priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabaled || succeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment