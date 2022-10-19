import { useEffect } from 'react'
import { useState } from 'react'
// API //
import api from '../services/api'
// TYPES //
import { IProduct } from '../store/modules/cart/types'
// COMPONENTS //
import { CatalogItem } from './CatalogItem'

export function Catalog() {
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get('/products').then(res => setCatalog(res.data))
    }, [])

    return (
        <main>
            <h1>Catálogo</h1>
            {
                catalog.map(product => <CatalogItem product={product} key={product.id} />)
            }
        </main>
    )
}