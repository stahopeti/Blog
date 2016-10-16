import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from '../app/about-me/about-me.component';
import { PhotoshopComponent } from '../app/photoshop/photoshop.component';
import { RecipesComponent } from '../app/recipes/recipes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  aboutMeActive:boolean;
  photoshopActive:boolean;
  recipesActive:boolean;

  constructor(){}

  ngOnInit(){
    this.setAboutMeActive();
  }

  setAboutMeActive(){
    this.aboutMeActive=true;
    this.photoshopActive=false;
    this.recipesActive=false;
  
  }
  setPhotoshopActive(){
    this.aboutMeActive=false;
    this.photoshopActive=true;
    this.recipesActive=false;
  }
  setRecipesActive(){
    this.aboutMeActive=false;
    this.photoshopActive=false;
    this.recipesActive=true;
  }


}
