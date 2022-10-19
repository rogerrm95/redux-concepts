import { createStore } from "redux"
// TYPES //
import { ICartState } from "./modules/cart/types"
// ROOT REDUCER //
import rootReducer from "./modules/rootReducer"

export interface IState {
    cart: ICartState
}

const store = createStore(rootReducer)

export default store