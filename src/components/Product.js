
import './product.css'
const Product = ({product}) => {
    return (
        <div className='oneonone'>
            <img src={product.image} alt={product.name} className='image'/>
      <h3 className='image-name'>{product.name}</h3>
      <p>{product.description}</p>
        </div>
    )
}

export default Product
