import { Pipe, PipeTransform } from '@angular/core';
import { PaymentMethods } from '../types/payment-metnods.type';

@Pipe({
  name: 'paymentMethodsTranslationKey'
})
export class PaymentMethodsTranslationKeyPipe implements PipeTransform {
  readonly translationMap = {
    [PaymentMethods.PAYPAL]: 'PAGES.CHECKOUT.PAYMENT_METHODS.PAYPAL',
    [PaymentMethods.CARD]: 'PAGES.CHECKOUT.PAYMENT_METHODS.CARD',
    [PaymentMethods.ON_PICKUP]: 'PAGES.CHECKOUT.PAYMENT_METHODS.ON_PICKUP',
  };

  transform(value: string): string {
    return this.translationMap[value];
  }

}
