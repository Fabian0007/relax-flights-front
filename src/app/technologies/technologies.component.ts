import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  goToAngular() : void {
     window.open("https://angular.io/");
  }
  
  goToBootstrap() : void {
     window.open("https://getbootstrap.com/");
  }
  
  goToNode() : void {
     window.open("https://nodejs.org/");
  }
  
  goToExpress() : void {
     window.open("http://expressjs.com/");
  }
}
