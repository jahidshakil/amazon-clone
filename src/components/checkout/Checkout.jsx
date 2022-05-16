import React from 'react'
import CheckoutProduct from '../checkoutproduct/CheckoutProduct'
import { useStateValue } from '../stateProvider/StateProvider'
import Subtotal from '../subtotal/Subtotal'
import './checkout.css'

const Checkout = () => {
  const [{ basket} , dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <img className='checkout-ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg' alt='' />
        <div >
          <h1 className='checkout-title'>Yor Shopping Basket</h1>
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
      <div className='checkout-right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout