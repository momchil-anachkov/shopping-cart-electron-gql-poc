import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { ShoppingCartSummary } from '../../feature/shopping/types/shopping-cart-summary.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemToCartMutation extends Mutation<ShoppingCartSummary> {
  document = gql`
    mutation addItemToCart($itemId: String!) {
      shoppingCart: addItemToCart (itemId: $itemId) {
        id,
        items {
          item {
            id
            name
          },
          amount
        }
      }
    }
  `;
}
