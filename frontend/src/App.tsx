import './App.css'
import HeadPhones from './components/products/headphones/headphones'
import Footer from './components/common/footer/Footer'
import Gear from './components/common/audio_gear/Gear'
import Header from './components/common/header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <HeadPhones />
      <Gear />
      <Footer />
    </div>
  )
}


export default App
