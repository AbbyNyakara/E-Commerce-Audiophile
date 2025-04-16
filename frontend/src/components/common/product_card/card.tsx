import { Product } from '../../../types/Product'
import Button from '../Button/Button'
import './card.css'

interface CardProps {
  product: Product
}

const Card = ({ product }: CardProps) => {
  return (
    <div className='card'>
      <img src={product.image} alt={product.name} className='product-image' />
      <div>
        <h3 className='product-title'>{product.name}</h3>
        <p className='product-description'>{product.description}</p>
        <Button title='see product' />
      </div>
    </div>
  )
}

export default Card
