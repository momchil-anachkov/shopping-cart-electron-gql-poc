import { ShoppingItem } from '.';

export interface ShoppingCartHydratedEntry {
  item: ShoppingItem;
  amount: number;
}
