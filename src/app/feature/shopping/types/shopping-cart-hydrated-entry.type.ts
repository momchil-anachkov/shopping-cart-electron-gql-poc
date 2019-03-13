import { ShoppingItem } from '.';

export interface ShoppingCartHydratedEntry {
  item: ShoppingItem;
  count: number;
}
