import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../../types';

@Component({
  selector: 'aesc-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.scss']
})
export class CatalogueItemComponent implements OnInit {
  @Input() item: ShoppingItem;
  @Output() itemAddedToCart: EventEmitter<ShoppingItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addItemToCartClicked = (event, item: ShoppingItem) => {
    this.itemAddedToCart.emit(item);
  }

}

