import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class SetItemAmountMutation extends Mutation {
  document = gql`
    mutation setItemAmount($itemId: String!, $itemAmount: Int!) {
      setItemAmount(itemId: $itemId, itemAmount: $itemAmount) {
        id
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
