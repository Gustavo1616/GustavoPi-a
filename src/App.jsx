import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'
import Checkout from './components/Checkout'


function App() {
  return (
  <CartProvider>
  <BrowserRouter>
   <NavbarComponent/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda de Sgto Morrison' texto='Tienda Tactica'/>}/>
      <Route path='/productos/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria:'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartView/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  </BrowserRouter>
  </CartProvider>
  )
}

export default App
