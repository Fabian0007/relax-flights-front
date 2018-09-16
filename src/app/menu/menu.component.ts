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
  
  goMap(): void {
    this.router.navigate(['/map/']);
  }
  
  goDataVisualization(): void {
    this.router.navigate(['/datavisualization/']);
  }
}
