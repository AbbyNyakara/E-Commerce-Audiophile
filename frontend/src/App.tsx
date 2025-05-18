import './App.css'
import HeadPhones from './components/products/headphones/headphones'
import Footer from './components/common/footer/Footer'
import Gear from './components/common/audio_gear/Gear'
import Header from './components/common/header/Header'
import Thumbnails from './components/products/thumbnails/Thumbnails'

const App = () => {
  return (
    <div>
      <Header />
      <HeadPhones />
      <Thumbnails />
      <Gear />
      <Footer />
    </div>
  )
}


export default App
