import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from "rxjs";

import { Driver} from '../../driver';
import { DriversService } from '../../drivers.service';
import {Vehicle} from "../../vehicle";
import {VehiclesService} from "../../vehicles.service";
import { Trip} from '../../trip';
import {TripsService} from '../../trips.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  driver: Observable<Driver>;
  vehicle:Observable<Vehicle>;
  trip:Trip;
  vehicles:Observable<Vehicle[]>;
  drivers:Observable<Driver[]>;
  vehicleSelected:Vehicle;
  driverSelected:Driver;
  success:boolean;
  constructor(private route: ActivatedRoute, private router: Router,private psd:DriversService,private psv:VehiclesService
    ,private pst:TripsService) {
      this.trip=new Trip();
      this.vehicleSelected=new Vehicle();
      this.driverSelected=new Driver();
     }

  ngOnInit() {
  }


  findVehicleAvailable(){
      console.log(this.trip.dateTrip);
      var date=moment(this.trip.dateTrip).format('YYYY-MM-DD');
      console.log(date);
      this.vehicles=this.psv.findVehicleAvailablesByDate(date);
  }

  findDriverAvailable(vehicleFound:Vehicle){
      this.vehicleSelected=vehicleFound;
      var dateDriver=moment(this.trip.dateTrip).format('YYYY-MM-DD');
      this.drivers=this.psd.findDriverAvailablesByDateAndLicense(dateDriver,vehicleFound.licenseRequired);
  }

  bookYourTrip(driverFound:Driver){
    this.driverSelected=driverFound;
    this.trip.driver=this.driverSelected;
    this.trip.vehicle=this.vehicleSelected;
    this.trip.dateTrip=moment(this.trip.dateTrip).format('YYYY-MM-DD');

    this.pst.save(this.trip).subscribe((data) =>{
        this.success=true;
        this.trip=data;
        this.trip.dateTrip=moment(this.trip.dateTrip).format('YYYY-MM-DD');
    },(error)=>{
        this.success=false;
        console.log(error);
    });


  }

  finishFunction(){
    this.router.navigate(['/vehicle']);
  }

}
