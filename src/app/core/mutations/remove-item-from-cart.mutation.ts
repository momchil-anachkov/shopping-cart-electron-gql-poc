import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RemoveItemFromCartMutation extends Mutation {
  document = gql`
    mutation removeItemFromCart($itemId: String!) {
      removeItemFromCart(itemId: $itemId) {
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
