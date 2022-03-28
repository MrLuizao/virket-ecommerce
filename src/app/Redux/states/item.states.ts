import { CartItemModel } from "src/app/Models/cart-item.model";

export interface ItemsState {
    items: ReadonlyArray<CartItemModel>;
}