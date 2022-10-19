import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
// TYPES //
import { ICartState } from "./modules/cart/types"
// ROOT //
import rootReducer from "./modules/rootReducer"
import rootSaga from "./modules/rootSaga"
// REDUX-SAGA //
import createSagaMiddleware from 'redux-saga'

export interface IState {
    cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
))

sagaMiddleware.run(rootSaga) 

export default store