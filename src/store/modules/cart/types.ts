// ROTA PRODUCTS //
export interface IProduct {
    id: number,
    title: string,
    price: number
}

export interface ICartItem {
    product: IProduct,
    quantity: number
}

export interface ICartState {
    items: ICartItem[],
    failedStockCheck: number[]
}

// ROTA STOCK //
export interface IStockResponse {
    id: number,
    quantity: number
}