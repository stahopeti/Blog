import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { 
    console.log("recipes constructor");
  }

  ngOnInit() {
    console.log("recipes OnInit");
    let temp = new Recipe("a", [], "a", "a");

  }

}
