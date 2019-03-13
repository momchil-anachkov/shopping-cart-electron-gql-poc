import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../state/app.state';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { CatalogueQuery } from '../../../../core/queries/catalogue.query';
import { AddItemToCartMutation } from '../../../../core/mutations/add-item-to-cart.mutation';
import { CatalogueService } from '../../../../core/providers/catalogue.service';
import { of } from 'rxjs';
import { ShoppingItem } from '../../types';
import { NotificationService } from '../../../../core/providers/notification.service';
import { ShoppingCartService } from '../../../../core/providers/shopping-cart.service';

@Component({
  selector: 'aesc-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public catalogueList$ = this.catalogueService.catalogueList$;

  constructor(
    private store$: Store<AppState>,
    private apollo: Apollo,
    private catalogueService: CatalogueService,
    private shoppingCartService: ShoppingCartService,
    private notificationService: NotificationService,
    private addItemToCartMutation: AddItemToCartMutation,
  ) { }

  ngOnInit() {
  }

  addItemToCart(item: ShoppingItem) {
    this.addItemToCartMutation.mutate({
      itemId: item.id
    }).subscribe(() => this.notificationService.itemAddedToCart(item.name));
  }

}
