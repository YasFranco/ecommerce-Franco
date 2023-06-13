import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {

    return (
        <article>
            <header>
                <h2> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p> precio: {price} </p>
                <p> Stock disponible: {stock} </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} > ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item 