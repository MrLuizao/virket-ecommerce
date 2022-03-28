import { CartItemModel } from 'src/app/Models/cart-item.model';
import { CartAction, CartActionTypes } from '../actions/cart-item.action';

const initialState: Array<CartItemModel> = []

export function CartReducer( state: Array<any> = initialState, action: CartAction){
    switch( action.type ){

        case CartActionTypes.ADD_ITEM:
            return [ ...state, action.payload];

        case CartActionTypes.DELETE_ITEM:
            return state.filter( item => item.id !== action.payload )        

        default:
            return state;
    }
}
