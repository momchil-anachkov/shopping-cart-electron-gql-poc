import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay, publishReplay, refCount } from 'rxjs/operators';
import { CatalogueQuery } from '../queries/catalogue.query';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public catalogueList$ = this.catalogueQuery
    .watch()
    .valueChanges
    .pipe(
      map(result => result.data.catalogue),
      shareReplay(1)
    );

  constructor(
    private catalogueQuery: CatalogueQuery,
  ) { }
}
