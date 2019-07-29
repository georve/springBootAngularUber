import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripComponent } from './add-trip.component';
import { FormsModule } from '@angular/forms';

describe('AddTripComponent', () => {
  let component: AddTripComponent;
  let fixture: ComponentFixture<AddTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ AddTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
