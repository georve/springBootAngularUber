import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//timecomponent
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//component Driver
import { ListDriverComponent } from './driver/list-driver/list-driver.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { EditDriverComponent } from './driver/edit-driver/edit-driver.component';
//component Vehicle
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle/edit-vehicle.component';

//component Trip
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { ListTripComponent } from './trip/list-trip/list-trip.component';

// services
import { DriversService } from './drivers.service';
import { VehiclesService }  from './vehicles.service';
import { TripsService}      from './trips.service';

export const TIME_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'MM YYYY',
  },
};

import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListDriverComponent,
    AddDriverComponent,
    EditDriverComponent,
    ListVehicleComponent,
    AddVehicleComponent,
    EditVehicleComponent,
    AddTripComponent,
    ListTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ArchwizardModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MomentDateModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, //you can change useValue
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: TIME_FORMATS },
    DriversService,
    VehiclesService,
    TripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
