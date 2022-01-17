import React from 'react'
import products from '../products'
import Product from './Product'

const ProductsList = () => {
    return (
        <div>
{products.map((product)=><Product product={product}/>)}

        </div>
        
        
    )
}

export default ProductsList
