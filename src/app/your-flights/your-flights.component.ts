import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-your-flights',
  templateUrl: './your-flights.component.html',
  styleUrls: ['./your-flights.component.css']
})
export class YourFlightsComponent implements OnInit {
  identification: string = "";
  tickets: Array<Object> = [];
  constructor(private requestService: RequestService, private route: ActivatedRoute,
  		private router: Router, private modalService: NgbModal){}

  ngOnInit() {
  }
  
  
  findTickets(): void {
    var id = this.identification;
    this.route.params.subscribe(params => {
      this.requestService.findTickets(id).subscribe(tickets => {
        this.tickets = tickets;
        if(this.tickets){
           for (var i = 0; i < this.tickets.length; i++){
            var obj:Object = this.tickets[i];
            obj['start'] = obj['flight']['start'];
            obj['destination'] = obj['flight']['destination'];
            obj['sold'] = new Date(obj['date_sold']);
            var dd = obj['sold'].getDate();
            var mm = obj['sold'].getMonth()+1;
            var yyyy = obj['sold'].getFullYear();
            if (dd<10) {
                dd='0'+dd;
            } 
            if (mm<10) {
                mm='0'+mm;
            } 
            obj['sold'] = dd+'/'+mm+'/'+yyyy;
            obj['date'] = new Date(obj['flight']['year'], obj['flight']['month'], obj['flight']['day'], obj['flight']['hour'], obj['flight']['minute'])
          }
        }
      });
    });
  }
}
