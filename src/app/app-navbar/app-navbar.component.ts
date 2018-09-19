import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  collapsed :boolean;
  @Input() home;
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  
  constructor( private route: ActivatedRoute,
  		private router: Router) {
  		  this.collapsed = true;
  		}

  ngOnInit() {
  }
  
  goHome(): void {
    this.router.navigate(['/home/']);
  }
}
