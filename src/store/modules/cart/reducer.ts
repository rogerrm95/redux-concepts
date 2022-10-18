import { Reducer } from 'redux';
// Tipagem //
import { ICartState } from './types'

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = () => {
    return INITIAL_STATE
}

export default cart;