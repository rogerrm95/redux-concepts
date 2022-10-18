import { createStore } from "redux"
// ROOT REDUCER //
import rootReducer from "./modules/rootReducer"

const store = createStore(rootReducer)

export default store