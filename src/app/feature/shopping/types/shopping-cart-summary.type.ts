import { ShoppingItem } from './shopping-item.type';

export interface ShoppingCartSummary {
  [key: string]: {
    itemId: string;
    item: ShoppingItem,
  };
}
