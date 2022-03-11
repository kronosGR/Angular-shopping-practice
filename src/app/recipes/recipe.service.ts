import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'This is a test desc',
      'https://www.mygreekdish.com/wp-content/uploads/2014/01/Traditional-Greek-bean-soup-recipe-Fasolada.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'This is a test desc',
      'https://www.mygreekdish.com/wp-content/uploads/2014/01/Traditional-Greek-bean-soup-recipe-Fasolada.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
