import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../Notification/NotificationService"
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        console.log(quantity)
        setQuantity(quantity)

        const objProduct = {
            id, name, price, quantity
        }

        addItem(objProduct)
        setNotification('error', `Se agrego correctamente ${quantity} ${name} al carrito`, 5)
    }

    return (
        <article className="detalle-item">
            <header>
                <h2> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 200}}/>
            </picture>
            <section >
                <p>descripcion: {description} </p>
                <p>categoria: {category} </p>
                <p> precio: {price} </p>
                <p> Stock disponible: {stock} </p>
            </section>
            <footer>
            {
                quantity == 0 
                    ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                    : <Link to='/cart' className="boton-final">finalizar compra</Link>
            }
            </footer>
        </article>
    )

}

export default ItemDetail


