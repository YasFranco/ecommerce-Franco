import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {

    return (


        <div className='prod-item'>
            <img className='producto-imagen' src={img} alt={name} />
            <div className='producto-detalles'>
                <h2 className='prod-titulo'> {name} </h2>
                <p> precio: {price} </p>
                <p> Stock disponible: {stock} </p>
            </div>
            <footer>
                <Link to={`/item/${id}`} className='boton-detalle' > ver detalle</Link>
            </footer>
        </div>

    )
}

export default Item 