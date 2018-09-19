import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor () { }
  
  ngOnInit() {
  }
  
  goToTech() : void {
     window.open("http://www.techandsolve.com/");
  }
}
