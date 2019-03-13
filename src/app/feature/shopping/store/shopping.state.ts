import { ShoppingItem } from '../types';
import { ShoppingCartEntry } from '../types/shopping-cart-entry.type';

export interface CatalogueCollectionState {
  [key: string]: ShoppingItem;
}

export interface ShoppingCartCollectionState {
  [key: string]: ShoppingCartEntry;
}

export interface ShoppingCartState {
  // items: ShoppingCartCollectionState;
  [key: string]: ShoppingCartEntry;
}

export interface ShoppingState {
  catalogue: CatalogueCollectionState;
  cart: ShoppingCartState;
}
