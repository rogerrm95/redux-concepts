import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
// ACTIONS //
import { addProductToCartRequest } from "../store/modules/cart/actions"
// TYPES //
import { IState } from "../store"
import { IProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
    product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
    const dispatch = useDispatch()

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id)
    })

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch, product])

    return (
        <article style={{ display: "flex", gap: '16px' }}>
            <strong>{product.title}</strong> {" - "}
            <span>{product.price}</span>

            <button type='button' onClick={handleAddProductToCart}>
                Comprar
            </button>

            {
                hasFailedStockCheck && (
                    <span style={{ color: 'red' }}>
                        Produto indisponível
                    </span>
                )
            }
        </article>
    )
}