import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartHydratedEntry } from '../../types/shopping-cart-hydrated-entry.type';

@Component({
  selector: 'aesc-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartEntry: ShoppingCartHydratedEntry;
  @Output() itemRemoved: EventEmitter<string> = new EventEmitter();
  @Output() amountChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemRemoveClicked = (event, itemId) => {
    this.itemRemoved.emit(itemId);
  }

  itemAmountChanged = (amount) => {
    this.amountChanged.emit(parseInt(amount, 10));
  }

}
