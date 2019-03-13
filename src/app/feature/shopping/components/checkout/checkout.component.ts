import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PaymentMethods } from '../../types/payment-metnods.type';
import { AppState } from '../../../../state/app.state';
import { Store } from '@ngrx/store';
import { CheckoutMutation } from '../../../../core/mutations/checkout.mutation';
import { NotificationService } from '../../../../core/providers/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aesc-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;
  public paymentMethods: typeof PaymentMethods = PaymentMethods;

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<AppState>,
    private checkoutMutation: CheckoutMutation,
    private notificationService: NotificationService,
    private router: Router,
  ) {
    this.checkoutForm = this.createCheckoutForm(this.formBuilder);
  }


  ngOnInit() {
  }

  private createCheckoutForm = (formBuilder: FormBuilder): FormGroup => {
    return formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      paymentMethod: [null, [Validators.required]],
    });
  }

  public placeOrder = () => {
    if (this.checkoutForm.valid) {
      // this.store$.dispatch(new ShoppingActions.PlaceOrder());
      this.checkoutMutation.mutate({
        userId: 'NO_ARGS',
      }).subscribe();
      this.notificationService.orderPlaced();
      this.router.navigate(['/', 'shopping', 'catalogue']);
    }
    // TODO: Dispatch place order
    // this.store$.dispatch
  }
}
