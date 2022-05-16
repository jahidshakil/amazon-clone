import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from '../checkoutproduct/CheckoutProduct';
import { useStateValue } from '../stateProvider/StateProvider'
import './payment.css'
const Payment = () => {
    const [{ basket, user }] = useStateValue();
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
                      {basket.map(item=>(
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
                      
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Payment