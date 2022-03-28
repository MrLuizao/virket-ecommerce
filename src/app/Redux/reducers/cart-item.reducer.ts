import { CartItemModel } from 'src/app/Models/cart-item.model';
import { CartAction, CartActionTypes } from '../actions/cart-item.action';

const initialState: Array<CartItemModel> = []

export function CartReducer( state: Array<CartItemModel> = initialState, action: CartAction){
    switch( action.type ){

        case CartActionTypes.ADD_ITEM:
            return [ ...state, action.payload]

        default:
            return state;
    }
}
