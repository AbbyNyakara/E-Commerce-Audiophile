import { headPhones } from '../../../../data'
import Card from '../../common/product_card/card'

const HeadPhones = () => {
  return (
    <div>
      <ul>
        {headPhones.map((product) => (
          <li key={product.slug}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeadPhones
