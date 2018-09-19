import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TechnologiesComponent } from './technologies/technologies.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FlightsComponent } from './flights/flights.component';

import { RequestService } from './request.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BuyTicketsComponent } from './buy-tickets/buy-tickets.component';
import { YourFlightsComponent } from './your-flights/your-flights.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
	{ path: 'home',  component: HomeComponent },
	{ path: 'flights', component: FlightsComponent },
	{ path: 'tickets/:id', component: BuyTicketsComponent },
	{ path: 'yourflights', component: YourFlightsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HeaderComponent,
    AboutComponent,
    TechnologiesComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    FlightsComponent,
    BuyTicketsComponent,
    YourFlightsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ScrollToModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgxDatatableModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
