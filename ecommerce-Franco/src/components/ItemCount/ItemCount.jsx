
import { useState } from "react"
import '../ItemCount/ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    
    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    return (
        <div>
            <h3 className="num-contador">{count}</h3>
            <button className="boton-agregar" onClick={decrement}>-</button>
            <button className="boton-agregar" onClick={() => onAdd(count)}>agregar al carrito </button>
            <button className="boton-agregar" onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount