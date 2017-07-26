import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(itemsData => this.items = itemsData);
  }
}
