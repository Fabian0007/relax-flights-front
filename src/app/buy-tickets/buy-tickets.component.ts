import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css'],
})
export class BuyTicketsComponent implements OnInit {
  tickets: Array<Object> = [];
  tickets_temp: Array<Object> = [];
  flight: string = "";
  columns: Array<Object> = [{prop: 'chair_number'}, {name: 'category'}];
  categories: Array<string> = ["Economy Class", "Premium Economy", "Business Class", "First Class"];
  min: number;
  max: number;
  category: string = "";
  closeResult: string;
  ticket_selected: string;
  

  constructor(private requestService: RequestService, private route: ActivatedRoute,
  		private router: Router, private modalService: NgbModal){
  		}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.requestService.getTicketsbyFlight(id).subscribe(tickets => {
        this.tickets = tickets;
        if(this.tickets){
           for (var i = 0; i < this.tickets.length; i++){
            var obj:Object = this.tickets[i];
            obj['id'] = obj['_id'];
          }
        }
        this.tickets_temp = tickets.slice();
      });
    });
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.requestService.getFlight(id).subscribe(flight => {
        this.flight = flight;
      });
    });
  }
  
  buyTicket(id: string, client:string): void {
      this.requestService.buyTicket(id, client).subscribe(tickets => {
        console.log(tickets)
      });
  }
  
  filter() {
    var min:number = this.min;
    var max:number = this.max;
    var category:string = this.category;
    console.log(category)
    this.tickets_temp = this.tickets.filter(function(d) {
      return (d['price'] > min || !min) && (d['price'] < max  || !max) && (d['category'] == category || !category);
    });
  }
  
  clearFilters():void {
    this.min = null;
    this.max = null;
    this.category = "";
    this.filter();
  }
  
  open(content, value) {
    this.ticket_selected = value;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}