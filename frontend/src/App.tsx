import './App.css'
import HeadPhones from './components/products/headphones/headphones'
import Footer from './components/common/footer/Footer'
import Gear from './components/common/audio_gear/Gear'

const App = () => {
  return (
    <div>
      <HeadPhones />
      <Gear />
      <Footer />
    </div>
  )
}


export default App
