import './App.css'
import Card from '../src/components/common/product_card/card'
import { headPhones } from '../data'

function App() {
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

export default App
