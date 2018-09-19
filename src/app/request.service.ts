import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {
  private url = "https://relax-flights.herokuapp.com/api";

  constructor(private http: Http) {
   }

  getFlights(): Observable<any> {
    var request =`${this.url}/flights/`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
  
  getTicketsbyFlight(id:string): Observable<any> {
    var request =`${this.url}/tickets/${id}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
  
  getFlight(id:string): Observable<any> {
    var request =`${this.url}/flights/${id}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
  
  buyTicket(id:string, client:string): Observable<any> {
    var request =`${this.url}/tickets/${id}/${client}`;
    return this.http.put(request, "")
      .map(response => {
        return response.json();
      });
  }
  
  findLastTicket(client:string): Observable<any> {
    var request =`${this.url}/tickets-information/${client}`;
    return this.http.get(request, "")
      .map(response => {
        return response.json();
      });
  }
  
  findTickets(id:string): Observable<any> {
    var request =`${this.url}/yourtickets/${id}`;
    return this.http.get(request)
      .map(response => {
        return response.json();
      });
  }
}