import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShoppingActionType } from './shopping.actions';
import * as ShoppingActions from './shopping.actions';
import { tap, withLatestFrom, filter, switchMap, map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarDismiss, MatSnackBarConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectShoppingCatalogueCollection } from './shopping.selectors';
import { CatalogueCollectionState } from './shopping.state';
import { Router } from '@angular/router';

@Injectable()
export class ShoppingEffects {
  shoppingCatalogue$ = this.store$.select(
    selectShoppingCatalogueCollection
  );

  @Effect({ dispatch: false })
  addedToCartSnackBar$ = this.actions$.pipe(
    ofType(ShoppingActionType.ADD_ITEM),
    withLatestFrom(this.shoppingCatalogue$),
    tap(([action, shoppingCatalogue]: [ShoppingActions.AddItem, CatalogueCollectionState]) => {
      this.matSnackBar.open(
        this.translate.instant('NOTIFICATIONS.ITEM_ADDED', { itemName: shoppingCatalogue[action.payload].name }),
        this.translate.instant('NOTIFICATIONS.GO_TO_CART'),
        {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        }
      )
        .afterDismissed().pipe(
          filter((event: MatSnackBarDismiss) => event.dismissedByAction)
        )
        .subscribe(() => {
          this.router.navigate(['/', 'shopping', 'cart']);
        });
    }),
  );

  @Effect({ dispatch: true })
  placeOrder$ = this.actions$.pipe(
    ofType(ShoppingActionType.PLACE_ORDER),
    map((action) => {
      this.matSnackBar.open(
        this.translate.instant('NOTIFICATIONS.ORDER_PLACED'),
        null,
        {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        }
      );
      this.router.navigate(['/', 'shopping', 'catalogue']);
      return new ShoppingActions.ClearCart();
    }),
  );


  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private matSnackBar: MatSnackBar,
    private translate: TranslateService,
    private router: Router,
  ) {
  }
}
