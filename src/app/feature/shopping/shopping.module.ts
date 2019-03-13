import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../lib/material.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CatalogueItemComponent } from './components/catalogue-item/catalogue-item.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentMethodsTranslationKeyPipe } from './pipes/payment-methods-translation-key.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CatalogueComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CatalogueItemComponent,
    ShoppingCartItemComponent,
    PaymentMethodsTranslationKeyPipe,
  ]
})
export class ShoppingModule { }
