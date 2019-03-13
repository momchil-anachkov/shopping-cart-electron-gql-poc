import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { ShoppingCartQuery } from '../../core/queries/shopping-cart.query';

@Component({
  selector: 'aesc-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  shoppingCartItemCount$: Observable<number> =
    this.shoppingCartQuery
      .watch()
      .valueChanges
      .pipe(
        map(result => {
          return result
            .data
            .shoppingCart
            .items
            .reduce((totalAmount, shoppingCartItem) => totalAmount + shoppingCartItem.amount, 0);
        }),
        shareReplay(),
      );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private shoppingCartQuery: ShoppingCartQuery,
  ) { }

  buttonClicked(event) {
  }

}
