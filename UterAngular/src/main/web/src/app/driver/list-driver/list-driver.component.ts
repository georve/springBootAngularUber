import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Driver} from '../../driver';
import { DriversService } from '../../drivers.service';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {

  drivers:Observable<Driver[]>;

  constructor(private driverService:DriversService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.drivers= this.driverService.findAll();
  }

  deleteDriver(id: number) {
    this.driverService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
