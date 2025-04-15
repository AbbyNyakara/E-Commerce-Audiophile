import './App.css'
import { headPhones } from '../data'

function App() {
  return (
    <div>
      <main>
        <ul>
          {headPhones.map((product) => (
            <li>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
