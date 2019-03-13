import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../state/app.state';
import { Store } from '@ngrx/store';
import { selectShoppingCart, selectShoppingCatalogueCollection, selectShoppingCartTotal } from '../../store';
import * as ShoppingActions from '../../store/shopping.actions';

@Component({
  selector: 'aesc-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$ = this.store$.select(
    selectShoppingCart
  );

  shoppingCartTotal$ = this.store$.select(
    selectShoppingCartTotal
  );

  shoppingCatalogueCollection$ = this.store$.select(
    selectShoppingCatalogueCollection,
  );

  constructor(
    private store$: Store<AppState>,
  ) {
  }

  ngOnInit() {
  }

  itemRemoved(itemId: string) {
    this.store$.dispatch(new ShoppingActions.RemoveItem(itemId));
  }

  amountChanged(itemId: string, amount: number) {
    this.store$.dispatch(new ShoppingActions.SetItemAmount({
      itemId: itemId,
      amount: amount,
    }));
    // console.log(typeof itemId, itemId);
    // console.log(typeof amount, amount);
  }

}
