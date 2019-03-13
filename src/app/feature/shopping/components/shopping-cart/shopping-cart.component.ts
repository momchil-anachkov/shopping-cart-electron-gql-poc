import { Component, OnInit } from '@angular/core';
import { RemoveItemFromCartMutation } from '../../../../core/mutations/remove-item-from-cart.mutation';
import { SetItemAmountMutation } from '../../../../core/mutations/set-item-amount.mutation';
import { ShoppingCartService } from '../../../../core/providers/shopping-cart.service';

@Component({
  selector: 'aesc-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  public shoppingCart$ = this.shoppingCartService.shoppingCart$;
  public shoppingCartTotal$ = this.shoppingCartService.shoppingCartTotal$;

  constructor(
    private removeItemFromCartMutation: RemoveItemFromCartMutation,
    private setItemAmountMutation: SetItemAmountMutation,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit() {
  }

  itemRemoved(itemId: string) {
    this.removeItemFromCartMutation.mutate({
      itemId: itemId,
    }).subscribe(result => console.log(result));
  }

  amountChanged(itemId: string, amount: number) {
    this.setItemAmountMutation.mutate({
      itemId: itemId,
      itemAmount: amount,
    }).subscribe();
  }

}
