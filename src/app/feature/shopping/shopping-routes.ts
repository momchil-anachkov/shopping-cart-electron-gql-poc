// import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'catalogue',
        component: CatalogueComponent,
      },
      {
        path: 'cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'catalogue',
      },
    ],
  }
];

// @NgModule({
//   imports: [
//     RouterModule.forChild(routes),
//   ],
//   declarations: []
// })
// export class ShoppingRoutingModule { }
