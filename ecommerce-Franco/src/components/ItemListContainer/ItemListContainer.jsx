import './ItemListContainer.css'
import { useState,  } from 'react'
// import { getProducts, getProductsByCategory } from '../../AsyncMoke'
import ItemList from '../ItemList/ItemList'
import ItemGrid from '../ItemGrid/ItemGrid'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../Hooks/useAsync'
import { getProducts } from '../../services/firebase/firestore/products'


const ItemListContainer = ( {greeting}) => {

    const [displayGrid, setDisplayGrid] = useState(false)
    const {categoryId} = useParams()
    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
    
    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Ups! Hubo un error al cargar los datos</h1>
    }

    return (
        <div className="titulo">
            <h1 > {greeting} </h1>
            <button onClick={() => setDisplayGrid(true)}>grilla</button>
            <button onClick={() => setDisplayGrid(false)}>lista</button>
            { displayGrid ? <ItemGrid products={products}/> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer


