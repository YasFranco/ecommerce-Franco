import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../Notification/NotificationService"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'Yasmin Franco',
                phone: '82746719',
                email: 'user@gmail.com'
            },
            items: cart,
            total
        }

        try {
            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
    
            const batch = writeBatch(db)
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
                
                const ordersRef = collection(db, 'orders')
    
                const { id } = await addDoc(ordersRef, objOrder)

                setNotification('success', 'La orden ha sido creada con exito, el id es: ' + id)
                clearCart()
                navigate('/')
            } else {
                setNotification('error', 'No hay stock del producto')
            }
        } catch (error) {
            setNotification('error', 'Error al cargarla orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <h1>Su orden esta siendo generada...</h1>
        )
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden de compra</button>
        </>
    )
}

export default Checkout 