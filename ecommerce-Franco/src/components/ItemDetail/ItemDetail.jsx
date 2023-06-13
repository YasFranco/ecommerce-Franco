import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    return (
        <article>
            <header>
                <h2> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>descripcion: {description} </p>
                <p>categoria: {category} </p>
                <p> precio: {price} </p>
                <p> Stock disponible: {stock} </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={6} onAdd={(quatity) => console.log('cantidad agregada', quatity)} />
            </footer>
        </article>
    )

}

export default ItemDetail