import { Component, OnInit } from '@angular/core';
import { ShoppingListItemModel } from './models';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shoppingList: ShoppingListItemModel[] = [];
  constructor(private service: ShoppingService) { }

  createANewShoppingItem(description: string) {

    this.service.addItem(description);
    this.shoppingList = this.service.getItems();
  }

  ngOnInit(): void {
    this.shoppingList = this.service.getItems();
  }

}
