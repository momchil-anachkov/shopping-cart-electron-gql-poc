import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CheckoutMutation extends Mutation {
  document = gql`
    mutation checkout($userId: String!) {
      checkout(NO_ARGS: $userId) {
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
