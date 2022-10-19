import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '../services/api'
import { addProductToCart } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'

export function Catalog() {
    const dispatch = useDispatch()

    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get('/products').then(res => setCatalog(res.data))
    }, [])

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(addProductToCart(product))
    }, [dispatch])

    return (
        <main>
            <h1>Catálogo</h1>
            {
                catalog.map(product => (
                    <article key={product.id}>
                        <strong>{product.title}</strong> {" - "}
                        <span>{product.price}</span>

                        <button type='button' onClick={() => handleAddProductToCart(product)}>
                            Comprar
                        </button>
                    </article>
                ))
            }
        </main>
    )
}