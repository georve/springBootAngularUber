import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

// services
import { DriversService } from './drivers.service';
import { VehiclesService }  from './vehicles.service';


@NgModule({
  declarations: [
    AppComponent,
    ListDriverComponent,
    AddDriverComponent,
    EditDriverComponent,
    ListVehicleComponent,
    AddVehicleComponent,
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DriversService,
    VehiclesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
