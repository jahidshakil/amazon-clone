import React from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
      <div className='header'>
          <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
          <div className='header-search'>
              <input className='header-searchInput' type="text" />
              <FontAwesomeIcon className='header-searchIcon' icon={faSearch} />
          </div>
          <div className='header-nav'>
              <div className='header-option'>
                  <span className='header-optionOne'>Hello Guest</span>
                  <span className='header-optionTwo'>Sign In</span>
              </div>
              <div className='header-option'>
                  <span className='header-optionOne'>Orders</span>
                  <span className='header-optionTwo'>Returns</span>
              </div>
              <div className='header-option'>
                  <span className='header-optionOne'>Your</span>
                  <span className='header-optionTwo'>Prime</span>
              </div>

              <div className='header-basket'>

              <FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} />
              <span className='header-basketCount header-optionalLineTwo'>0</span>

          </div>
          </div>
      </div>
  )
}

export default Header