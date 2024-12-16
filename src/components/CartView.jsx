import React from 'react'
import { useCart } from '../context/CartContext'
import EmptyCart from './EmptyCart'
import CartList from './CartList'

const CartView = () => {
    const {cart} = useCart()
  return (
    <div >
        {!cart.length 
        ? <EmptyCart/> 
        : <div >
            <h2 className='tituloCarrito'>Tu carrito</h2>
            <CartList/>
        </div>
        }
    </div>
  )
}

export default CartView
