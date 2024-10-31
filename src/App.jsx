import './App.css'
import NavbarComponent from './components/Navbarcomponent'
import ItemListContainer from './components/ItemListContainer'
import Cards from './components/cards'
function App() {
  return (
  <div>
    <NavbarComponent/>
    <ItemListContainer greeting='Bienvenidos a la tienda de Sgto Morrison' texto='Tienda Tactica'/>
    <div className='productosVenta'>
      <Cards src='public/products/botas.png' tittle='botas' />
      <Cards src='public/products/chaleco.png' tittle='Chaleco'/>
      <Cards src='public/products/cinturon.png' tittle='Cinturon'/>
      <Cards src='public/products/guantes.png' tittle='Guantes'/>
      <Cards src='public/products/casco.png' tittle='Casco'/>
      <Cards src='public/products/pantalon.png' tittle='Pantalon'/>
    </div>
  </div>
  )
}

export default App
