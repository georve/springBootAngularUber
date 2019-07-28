import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTripComponent } from './list-trip.component';

describe('ListTripComponent', () => {
  let component: ListTripComponent;
  let fixture: ComponentFixture<ListTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
