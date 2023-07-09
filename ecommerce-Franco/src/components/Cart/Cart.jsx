import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, total } = useCart()

    return (
        <>
            <h1>Carrito</h1>
            {
                cart.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h2>Total: ${total}</h2>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </>


    )
}

export default Cart

