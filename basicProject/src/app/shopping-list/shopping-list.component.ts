import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient ( "Bananas", "items", 5),
    new Ingredient ( "Bacon", "slices", 5),
    new Ingredient ( "Oatmeal", "ounces", 16)
  ];

  constructor() {

  };

  ngOnInit(){

  };
}
