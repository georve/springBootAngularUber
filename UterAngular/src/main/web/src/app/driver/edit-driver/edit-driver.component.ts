import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Driver} from '../../driver';
import { DriversService } from '../../drivers.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  angForm: FormGroup;
  driver:any={};


  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private ps:DriversService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      DriverName: ['', Validators.required ],
      DriverLastName: ['', Validators.required ],
      DriverLicense: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.ps.findById(params['id']).subscribe(res => {
        this.driver=res;
      })
    });
  }


  onSubmit(){
    this.ps.update(this.driver.id,this.driver).subscribe(data => console.log(data), error => console.log(error));
    this.driver=new Driver();
    this.gotoDriverList();
  }

  gotoDriverList(){
    this.router.navigate(['/drivers']);
  }

}
