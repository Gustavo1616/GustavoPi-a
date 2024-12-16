import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
  return (
    <div className='infoCardCompra'>
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
        <div className='infoExtraCompra'>
        <span>Total a pagar: ${cartTotal()}</span>
            <button className='btn btn-danger' onClick={clear}> Borrar Carrito</button>
            <Link className='btn' to='/checkout'>Terminar Compra</Link>
        </div>
    </div>
  )
}

export default CartList