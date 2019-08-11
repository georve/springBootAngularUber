import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {Vehicle} from "../../vehicle";
import {VehiclesService} from "../../vehicles.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  angForm: FormGroup;
  vehicle:Vehicle;
  
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private ps:VehiclesService,
    private toasterService: ToastrService) {
    this.vehicle=new Vehicle();
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      VehicleBrand: ['', Validators.required ],
      VehicleModel: ['', Validators.required ],
      VehiclePlate: ['',Validators.required],
      VehicleLicense: ['', Validators.required ]
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    if(this.angForm.invalid){
      return;
    }
    
    this.ps.save(this.vehicle).subscribe(data =>{
      this.toasterService.success('Vehicle saved successfully','Success', { positionClass: 'toast-top-right' });
      this.vehicle=new Vehicle();
      this.gotoList();
    });
    
  }

  gotoList(){
    this.router.navigate(['/vehicle']);
  }

}
