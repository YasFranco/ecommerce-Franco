
import { TiShoppingCart } from 'react-icons/ti';
import { useCart } from '../../context/CartContext'




const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div className='carrito'>
            <TiShoppingCart/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget