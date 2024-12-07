import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
  return (
    <div>
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
        <span>Total a pagar: ${cartTotal()}</span>
        <div >
            <button className='btn btn-danger' onClick={clear}> Borrar Carrito</button>
            <Link className='btn' to='/checkout'>Terminar Compra</Link>
        </div>
    </div>
  )
}

export default CartList