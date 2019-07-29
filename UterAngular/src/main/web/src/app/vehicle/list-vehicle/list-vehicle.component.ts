import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Vehicle } from "./../../vehicle";
import { VehiclesService} from "./../../vehicles.service";


@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  vehicles:Observable<Vehicle[]>;

  constructor(private vehiclesService:VehiclesService) {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
    this.reloadData();
  }

  reloadData(){
    this.vehicles=this.vehiclesService.findAll();
  }

  deleteVehicle(id: number) {
    if(window.confirm('Are you sure?')) {
    this.vehiclesService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
  }

}
