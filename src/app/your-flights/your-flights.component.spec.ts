import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFlightsComponent } from './your-flights.component';

describe('YourFlightsComponent', () => {
  let component: YourFlightsComponent;
  let fixture: ComponentFixture<YourFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
