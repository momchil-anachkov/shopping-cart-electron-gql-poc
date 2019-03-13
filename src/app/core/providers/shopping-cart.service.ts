import { Injectable } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ShoppingCartQuery } from '../queries/shopping-cart.query';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public shoppingCartQuery$ = this.shoppingCartQuery.watch().valueChanges;

  shoppingCart$ = this.shoppingCartQuery$.pipe(
    map(result => result.data.shoppingCart.items),
    shareReplay(1),
  );

  shoppingCartTotal$: Observable<number> = this.shoppingCartQuery$.pipe(
    map(result => {
      return result.data.shoppingCart.items
        .reduce((totalAmount, shoppingCartItem) => {
          return totalAmount + shoppingCartItem.amount * shoppingCartItem.item.price;
        }, 0);
    }),
    shareReplay(1),
  );

  shoppingCartItemCount$: Observable<number> =
    this.shoppingCartQuery$.pipe(
      map(result => {
        return result.data.shoppingCart.items
          .reduce((totalAmount, shoppingCartItem) => {
            return totalAmount + shoppingCartItem.amount;
          }, 0);
      }),
      shareReplay(1),
    );

  constructor(
    private shoppingCartQuery: ShoppingCartQuery,
  ) {
  }
}
