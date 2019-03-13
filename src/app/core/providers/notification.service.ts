import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MatSnackBarDismiss, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private matSnackBar: MatSnackBar,
    private translate: TranslateService,
    private router: Router,
  ) { }

  itemAddedToCart(itemName: string) {
    this.matSnackBar.open(
      this.translate.instant('NOTIFICATIONS.ITEM_ADDED', { itemName: itemName }),
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
  }

  orderPlaced() {
      this.matSnackBar.open(
        this.translate.instant('NOTIFICATIONS.ORDER_PLACED'),
        null,
        {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        }
      );
  }
}
