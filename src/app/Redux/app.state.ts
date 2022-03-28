import { CartItemModel } from '../Models/cart-item.model';

export interface AppState {
    readonly cart: Array<CartItemModel>
}
