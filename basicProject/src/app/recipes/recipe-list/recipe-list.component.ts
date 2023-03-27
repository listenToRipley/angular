import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Banana Bacon Pancakes", "Oatmeal and Banana pancakes with Bacon", "https://preview.redd.it/whq4ugmvjks41.jpg?auto=webp&s=905b3fa2740efd052a9e09304d819d2fccc981e5"),
    new Recipe("Banana Bacon Pancakes", "Oatmeal and Banana pancakes with Bacon", "https://preview.redd.it/whq4ugmvjks41.jpg?auto=webp&s=905b3fa2740efd052a9e09304d819d2fccc981e5")
  ];

  constructor() {

  }

  ngOnInit() {

  }

}
