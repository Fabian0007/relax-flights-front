import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  goToFacebook() : void {
     window.open("https://www.facebook.com/fabianandres.cano.7");
  }
  
  goToTwitter() : void {
     window.open("https://twitter.com/Fabian0007");
  }
  
  goToLinkedin() : void {
     window.open("https://co.linkedin.com/in/fabian-andres-cano-778478107");
  }

}
