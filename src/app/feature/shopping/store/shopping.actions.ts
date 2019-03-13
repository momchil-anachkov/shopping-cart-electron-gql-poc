import { Action } from '@ngrx/store';

export enum ShoppingActionType {
  ADD_ITEM = '[Shopping] Add Item',
  REMOVE_ITEM = '[Shopping] Remove Item',
  SET_ITEM_AMOUNT = '[Shopping] Set Item Amount',
  PLACE_ORDER = '[Shopping] Place Order',
  CLEAR_CART = '[Shopping] Clear Cart',
}

export class AddItem implements Action {
  readonly type: ShoppingActionType = ShoppingActionType.ADD_ITEM;
  constructor(
    public payload: string,
  ) {
  }
}

export class RemoveItem implements Action {
  readonly type: ShoppingActionType = ShoppingActionType.REMOVE_ITEM;
  constructor(
    public payload: string,
  ) {
  }
}

export interface SetItemAmountPayload {
  itemId: string;
  amount: number;
}

export class SetItemAmount implements Action {
  readonly type: ShoppingActionType = ShoppingActionType.SET_ITEM_AMOUNT;
  constructor(
    public payload: SetItemAmountPayload,
  ) {
  }
}
export class PlaceOrder implements Action {
  readonly type: ShoppingActionType = ShoppingActionType.PLACE_ORDER;
}

export class ClearCart implements Action {
  readonly type: ShoppingActionType = ShoppingActionType.CLEAR_CART;
}

export type ShoppingAction =
  AddItem |
  RemoveItem |
  SetItemAmount |
  PlaceOrder |
  ClearCart;
