import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../state/app.state';
import { Store } from '@ngrx/store';
import { selectShoppingCatalogueCollection, selectShoppingCatalogueList } from '../../store';
import * as ShoppingActions from '../../store/shopping.actions';

@Component({
  selector: 'aesc-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  public catalogueCollection$ = this.store$.select(
    selectShoppingCatalogueCollection,
  );

  public catalogueList$ = this.store$.select(
    selectShoppingCatalogueList,
  );

  constructor(
    private store$: Store<AppState>,
  ) { }

  ngOnInit() {
  }

  addItemToCart(itemId: string) {
    this.store$.dispatch(new ShoppingActions.AddItem(itemId));
  }

}
