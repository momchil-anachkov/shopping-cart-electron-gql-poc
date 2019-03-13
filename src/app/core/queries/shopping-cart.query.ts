import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartQuery extends Query<any> {
  document = gql`
    query {
      shoppingCart {
        id
        items {
          item {
            id,
            name,
            price
          }
          amount
        }
      }
    }
  `;
}
