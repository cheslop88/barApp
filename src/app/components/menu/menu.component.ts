import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(itemsData => this.items = itemsData);
  }

  /* Function to show total cost of ordered items */
  totalCost() {
    let sum = 0;
    if (this.items) {
      if (Array.isArray(this.items)) {
        for (const item of this.items) {
          if (item.inBasket) {
            if (item.special_offer === true) {
              sum += item.quantity * item.special_offer_price;
            } else {
              sum += item.quantity * item.price;
            }
          }
        }
      }
    }
    return sum;
  }
  cancelItem(item) {
    item.inBasket = false;
    item.quantity = 0;
    this.totalCost();
  }
  /* Function to show total quantity of ordered items */
  totalQuantity() {
    let sum = 0;
    if (this.items) {
      if (Array.isArray(this.items)) {
        for (const item of this.items) {
          if (item.inBasket) {
            sum += item.quantity;
          }
        }
      }
    }
    return sum;
  }
  showBasket() {
      console.log('basket');
  }
  /* Function to increase quantity on click */
  upQuantity(item) {
    if (item.quantity < item.stock_available) item.quantity++;
    if (item.quantity > 0) item.inBasket = true;
  }
  /* Function to increase quantity on click */
  downQuantity(item) {
    if (item.quantity !== 0) item.quantity--;
    if (item.quantity === 0) item.inBasket = false;
  }
}
