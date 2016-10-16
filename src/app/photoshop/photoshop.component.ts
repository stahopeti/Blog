import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.css']
})
export class PhotoshopComponent implements OnInit {

  constructor() { 
    console.log("photoshop constructor");
  }

  ngOnInit() {
    console.log("photoshop OnInit");
  }

}
