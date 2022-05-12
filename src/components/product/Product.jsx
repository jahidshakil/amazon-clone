import { useStateValue } from '../stateProvider/StateProvider'
import './product.css'
const Product = ({ id, title, price, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  
  const AddToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price:price,
      }
    });
  }
  
  return (
      <div className='product'>
          <div className='product-info'>
        <p>{title}</p>
              <p className='product-price'>
                  <small>$</small>
          <strong>{price}</strong>
              </p>
          </div>
          <img src={image} alt='' />
          <button onClick={AddToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product