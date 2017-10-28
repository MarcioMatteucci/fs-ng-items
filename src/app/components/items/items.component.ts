import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../services/item.service';

import { Item } from './../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState = false;
  itemToEdit: Item;

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getItems()
      .subscribe((data) => {
        this.items = data;
        // console.log(this.items);
      });
  }

  deleteItem(event, item: Item) {
    this.itemService.deleteItem(item);
    this.clearState();
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
