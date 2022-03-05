import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test desc',
      'https://www.mygreekdish.com/wp-content/uploads/2014/01/Traditional-Greek-bean-soup-recipe-Fasolada.jpg'
    ),
    new Recipe(
      'A test recipe',
      'This is a test desc',
      'https://www.mygreekdish.com/wp-content/uploads/2014/01/Traditional-Greek-bean-soup-recipe-Fasolada.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
