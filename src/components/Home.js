import React from 'react'

import ProductsList from './ProductsList'

const Home = () => {
    return (
        <div>
            <header>
               <img src='https://logodix.com/logo/639124.png' alt='Logo' className='logo'/> 
               <h1>S Fashion</h1>
               <p className='para'>Fashion is something we deal with everyday.<br/>Even people who say they don’t care what they wear choose clothes<br/>every morning that say a lot about them and how they feel that day.</p>
            </header>
          <ProductsList /> 
        </div>
    )
}

export default Home
