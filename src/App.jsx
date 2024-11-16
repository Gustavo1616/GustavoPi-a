import './App.css'
import NavbarComponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
   <NavbarComponent/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda de Sgto Morrison' texto='Tienda Tactica'/>}/>
      <Route path='/productos/:categorias' element={<ItemListContainer greeting='Bienvenidos a la categoria:'/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>


   
  </BrowserRouter>
  )
}

export default App
