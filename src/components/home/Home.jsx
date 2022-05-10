import React from 'react'
import Product from '../product/Product'
import './home.css'


const Home = () => {
  return (
      <div className='home'>
          <div className='home-container'>
              <img className='home-img' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg' alt='' />
        <div className='home-row'>
        <Product id="111" title='iPhone 11 Pro' price={999.99} image="https://mymobilesnews.com/wp-content/uploads/2022/02/iPhone-11-Pro_.jpg" />
          
        <Product id="113" title='2019 Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray' price={1299.99} image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg" />
              </div>
        <div className='home-row'>
          <Product id="113" title='iPad Pro 11" WiFi 8GB/128GB Space Grey' price={1299.99} image="https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/IPP121TBGW_.jpg/resize?size=600&auth=MjA5OTcwODkwMg__" /> 
          
          <Product id="114" title='Samsung Galaxy S22 Ultra 5G' price={1499.99} image="https://static.toiimg.com/thumb/resizemode-4,msid-89472209,imgsize-200,width-1200/89472209.jpg" />

          <Product id="115" title='Apple AirPods 3rd Generation' price={199.99} image="https://gadgetnmusic.com/wp-content/uploads/2021/10/MME73.jpg" />
        </div>
        <div className='home-row'>
        <Product id="116" title='Sceptre Curved 49 inch (5120x1440) Dual QHD 32:9 Gaming Monitor up to 120Hz DisplayPort HDMI Build-in Speakers, Gunmetal Black 2021 (C505B-QSN168)' price={2999.99} image="https://m.media-amazon.com/images/I/61jZXu6Y1dL._AC_SX679_.jpg" />
              </div>

          </div>
          
    </div>
  )
}

export default Home