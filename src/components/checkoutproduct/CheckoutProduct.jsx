
import React from 'react'
import { useStateValue } from '../stateProvider/StateProvider'
import './checkoutProduct.css'

const CheckoutProduct = ({ id, image, title, price }) => {
    const [{basket}, dispatch ] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }
  return (
      <div className='checkoutProduct'>
          <img className='checkoutProduct-Image' src={image} alt='' />
          <div className='checkoutProduct-Info'>
              <p className='checkoutProduct-title'>{title}</p>
              <p className='checkoutProduct-price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <button onClick={removeFromBasket}>Remove from Basket</button>
          </div>
    </div>
  )
}

export default CheckoutProduct