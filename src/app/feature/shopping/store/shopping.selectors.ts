import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreKeyNames } from '../../../config';
import { ShoppingState } from './shopping.state';
import { ShoppingCartEntry } from '../types/shopping-cart-entry.type';
import { ShoppingCartSummary } from '../types/shopping-cart-summary.type';
import { ShoppingCartHydratedEntry } from '../types/shopping-cart-hydrated-entry.type';

export const selectShopping = createFeatureSelector<ShoppingState>(StoreKeyNames.SHOPPING);

export const selectShoppingCatalogueCollection = createSelector(
  selectShopping,
  (state: ShoppingState) => state.catalogue
);

export const selectShoppingCatalogueList = createSelector(
  selectShopping,
  (state: ShoppingState) => Object.values(state.catalogue)
);

export const selectShoppingCart = createSelector(
  selectShopping,
  (state: ShoppingState): ShoppingCartHydratedEntry[] => {
    return Object.values(state.cart)
      .map(shoppingEntry => ({
        item: state.catalogue[shoppingEntry.itemId],
        count: shoppingEntry.count
      }));
  }
);

export const selectShoppingCartItemCount = createSelector(
  selectShopping,
  (state: ShoppingState): number => {
    return Object.values(state.cart)
      .map(shoppingCartEntry => shoppingCartEntry.count)
      .reduce((sum, currentCount) => sum += currentCount, 0);
  }
);

export const selectShoppingCartTotal = createSelector(
  selectShoppingCart,
  (cart): number => {
    return cart
      .map(entry => entry.count * entry.item.price)
      .reduce((entrySum, currentEntry) => entrySum += currentEntry, 0);
  }
);
