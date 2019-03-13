import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { CatalogueCollectionState } from '../../feature/shopping/store';

@Injectable({
  providedIn: 'root'
})
export class CatalogueQuery extends Query<any> {
  document = gql`
    query catalogue {
      catalogue {
        id
        name
        description
        image
        price
      }
    }
  `;

}
