import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import api from '../../../services/api'
// ACTIONS //
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'
// TYPES //
import { IState } from '../..'
import { ActionTypes, IStockResponse } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

/*  CHECAGEM DE ESTOQUE
 *  Função irá verificar se o produto já se encontra no carrinho de compras.
 *  Após verificar, a função realiza uma chamada API na rota stock passando o id do produto
 *  Caso a quantidade do produto em estoque seja maior do que a quantidade desejada, a função:
 *  Em caso de verdadeiro: Adiciona o item ao carrinho;
 *  Em caso de falso: Retorna o id do produto e gera um erro ao usuário.
*/

function* checkProductsStock({ payload }: CheckProductStockRequest) {
    const { product } = payload

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    })

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `/stock/${product.id}`)

    if (availableStockResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSuccess(product))
    } else {
        yield put(addProductToCartFailure(product.id))
    }
}

export default all([
    takeLatest(ActionTypes.addProductToCartRequest, checkProductsStock)
])