import { CartItemModel } from 'src/app/Models/cart-item.model';
import { Action } from '@ngrx/store';

export enum CartActionTypes {
    ADD_ITEM = '[CART] Add Item',
    DELETE_ITEM = '[CART] Delete Item'
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM;
    constructor ( public payload: CartItemModel){}
}

export class DeleteItemAction implements Action {
    readonly type = CartActionTypes.DELETE_ITEM;
    constructor ( public payload: CartItemModel){}
}

export type CartAction = AddItemAction | DeleteItemAction;
