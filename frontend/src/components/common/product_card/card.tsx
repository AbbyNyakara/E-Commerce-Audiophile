import { Product } from '../../../types/Product'
import Button from '../Button/Button'
import './card.css'

interface CardProps {
  product: Product // Inherits from the product Type
}

const Card = ({ product }: CardProps) => {
  return (
    <div className='card'>
      <div className='image-div'>
        <img src={product.image} alt={product.name} className='product-image' />
      </div>

      <div className='product-details'>
        <h3 className='product-title'>{product.name}</h3>
        <p className='product-description'>{product.description}</p>
        <Button title='see product' className='btn' />
      </div>
    </div>
  )
}

export default Card
