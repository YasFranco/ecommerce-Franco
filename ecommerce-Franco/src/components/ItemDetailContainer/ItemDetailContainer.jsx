import { useState, useEffect } from "react";
// import { getProductById } from "../../AsyncMoke";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () =>{

    const [product,setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(querySnapshot => {
                const fields = querySnapshot.data()
                const productAdapted = { id: querySnapshot.id, ...fields} 

                setProduct(productAdapted)
            })
    }, [itemId])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer 

