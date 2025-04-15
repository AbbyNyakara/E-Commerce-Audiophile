import { headPhones } from '../../../../data'

const HeadPhones = () => {
  return (
    <div>
      <ul>
        {headPhones.map((product) => (
          <li>
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <button>SEE PRODUCT</button>
            </div>
            <img src={product.image} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeadPhones
