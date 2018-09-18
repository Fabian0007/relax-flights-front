import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {
  destination: string = "";
  start: string = "";
  date: any = "";
  flights: Array<Object> = [];
  flights_temp : Array<Object> = [];
  columns: Array<Object> = [{prop: 'start'}, {name: 'destination'}];
  constructor(private requestService: RequestService, private route: ActivatedRoute,
  		private router: Router) { }

  ngOnInit(){
    this.requestService.getFlights()
      .subscribe(flights => {
        this.flights = flights;
        console.log(flights)
        if(this.flights){
           for (var i = 0; i < this.flights.length; i++){
            var obj:Object = this.flights[i];
            obj['id'] = obj['_id'];
            obj['date'] = new Date(obj['year'], obj['month'], obj['day'], obj['hour'], obj['minute'])
          }
        }
        this.flights_temp = this.flights.slice()
        console.log(this.flights_temp)
      });
  }
  
  goToTickets(id: string): void {
    console.log(id)
    this.router.navigate(['/tickets/'+id]);
  }
  
  onDateSelect(event): void {
    console.log(event)
  }
  
  filter() {
    var destination:string = this.destination;
    var start:string = this.start;
    var date:string = this.date;
    console.log(date=={})
    console.log(start)
    this.flights_temp = this.flights.filter(function(d) {
      return (d['start'].toLowerCase().indexOf(start.toLowerCase()) !== -1 || !start) && (d['date'].toLocaleDateString("en-US").indexOf(date['month']+"/"+date['day']+"/"+date['year']) !== -1 || !date) && (d['destination'].toLowerCase().indexOf(destination.toLowerCase()) !== -1 || !destination);
    });
  }
  
  clearFilters():void {
    this.destination = "";
    this.start = "";
    this.date = "";
    this.filter();
  }
}