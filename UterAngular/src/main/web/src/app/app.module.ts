import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDriverComponent } from './driver/list-driver/list-driver.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { EditDriverComponent } from './driver/edit-driver/edit-driver.component';

// services
import { DriversService } from './drivers.service';

@NgModule({
  declarations: [
    AppComponent,
    ListDriverComponent,
    AddDriverComponent,
    EditDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DriversService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
