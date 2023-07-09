
import { useCart } from "../../context/CartContext"

const CartItem = ({ id, name, img, price, quantity}) => {

    const { removeItem } = useCart()

    return (
        <div>
            <h1>Producto seleccionado</h1>
            <img src={img} style={{width: 200}}/>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <h4>cantidad: {quantity}</h4>
            <h4>subtotal: ${quantity * price}</h4>
            <button onClick={() => removeItem(id)}>Eliminar producto</button>
        </div>
    )
}

export default CartItem