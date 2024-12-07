import { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ItemDetail = ({producto}) => {
    const [compra, setCompra] = useState(false)
    const {addToCart}= useCart()
    const onAdd = (count) =>{
            setCompra(true)
            addToCart(producto, count)
    }

  return (
    
    <div className="producto-container">
        <div className="producto-card">
            <h1 className="producto-title">{producto.name}</h1>
            <div className="producto-img-container">
                <img src={producto.img} alt={producto.name} className="producto-img"/>
            </div>
            <div className="producto-info">
                <p className="producto-description">{producto.description}</p>
                <p className="producto-price">${producto.price}</p>
                {compra 
                ? <div className='botonesProductosDetalle'>
                <Link className='btn' to='/'>Seguir comprando</Link>
                <Link className='btn' to='/cart'>Ir al carrito</Link>
                </div> 
                : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
            </div>
        </div>
    </div>
  )
}
export default ItemDetail