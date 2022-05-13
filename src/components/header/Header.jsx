import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from '../stateProvider/StateProvider';


const Header = () => {
    const [{basket}] = useStateValue();

  return (
      <div className='header'>
          <nav>
          <Link to="/">
              <img className='header-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            </Link>
        </nav>
          <div className='header-search'>
              <input className='header-searchInput' type="text" />
              <FontAwesomeIcon className='header-searchIcon' icon={faSearch} />
          </div>
          <div className='header-nav'>
              <Link to="/login" style={{ textDecoration: 'none' }}>
              <div className='header-option'>
                  <span className='header-optionOne'>Hello Guest</span>
                  <span className='header-optionTwo'>Sign In</span>
              </div>
              </Link>
              <div className='header-option'>
                  <span className='header-optionOne'>Orders</span>
                  <span className='header-optionTwo'>Returns</span>
              </div>
              <div className='header-option'>
                  <span className='header-optionOne'>Your</span>
                  <span className='header-optionTwo'>Prime</span>
              </div>
              <nav>
                  <Link to="/checkout" style={{textDecoration: 'none'}}>                  
                  <div className='header-basket'>
                   <FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} />
                          <span className='header-basketCount header-optionalLineTwo'>{ basket?.length}</span>
                    </div>
                    </Link>
                </nav>
          </div>
      </div>
  )
}

export default Header