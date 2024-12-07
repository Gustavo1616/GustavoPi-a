import { useCart} from "../context/CartContext"
const CartWidget = () => {
    const {cartQuantity} = useCart()
    return(
        <div className="cartWidgetContainer">
            <img src='../shoppingcart.png' alt='cart' className="cartIcon"/>
            { cartQuantity() > 0 && <span className="badge teal lighten-2">{cartQuantity()}</span>}
            
        </div>
    )
}

export default CartWidget