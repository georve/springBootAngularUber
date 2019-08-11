import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Driver} from '../../driver';
import { DriversService } from '../../drivers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

  angForm: FormGroup;
  driver: Driver;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private ps:DriversService,
    private toasterService: ToastrService) {
    this.driver=new Driver();
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      DriverName: ['', Validators.required ],
      DriverLastName: ['', Validators.required ],
      DriverLicense: ['', Validators.required ]
    });
  }

  onSubmit(){
    if(this.angForm.invalid){
      return;
    }
    this.ps.save(this.driver).subscribe(data =>{
      this.toasterService.success('Driver saved successfully','Success', { positionClass: 'toast-top-right' });
      this.driver=new Driver();
      this.gotoDriverList();
    });
  
   
  }

  gotoDriverList(){
    this.router.navigate(['/drivers']);
  }

  

  ngOnInit() {
  }

}
