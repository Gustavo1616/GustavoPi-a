import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({prod}) => {
    const {removeItem} = useCart()
  return (
    <div className='cardCarrito'>
        <img src={prod.img} alt={prod.name} className='card-img' />
        <div className='card-info'>
        <span>{prod.name}</span>
        <span>cantidad:{prod.cantidad}</span>
        <span>precio por unidad: ${prod.price},00</span>
        <span >Precio final: ${prod.cantidad * prod.price},00</span>
        </div>
        <button className='btn quitarProducto' onClick={()=> removeItem(prod.id)}>X</button>
    </div>
  )
}

export default CartItem