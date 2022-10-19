import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
// TYPES //
import { ICartState } from "./modules/cart/types"
// ROOT REDUCER //
import rootReducer from "./modules/rootReducer"

export interface IState {
    cart: ICartState
}

const store = createStore(rootReducer, composeWithDevTools())

export default store