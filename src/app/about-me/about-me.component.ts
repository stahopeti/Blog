import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})


export class AboutMeComponent implements OnInit {

  name: string;
  schools: string[];
  life: string;
  constructor() { }

  ngOnInit() {
    this.name = "Stahorszki Péter Bence";
    this.schools = [
      "Kodály Zoltán Általános Iskola",
      "Zrínyi Ilona Gimnázium és Kollégium",
      "BME - Mérnök Informatikus szak"
    ];
    this.life = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

}
