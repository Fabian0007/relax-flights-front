import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor( private route: ActivatedRoute,
  		private router: Router) { }

  ngOnInit() {
  }
  
  goFlights(): void {
    this.router.navigate(['/flights/']);
    window.scrollTo(0, 0);
  }
  
  goToYourFlights(): void {
    this.router.navigate(['/yourflights/']);
    window.scrollTo(0, 0);
  }
}
