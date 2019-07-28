import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDriverComponent} from './driver/add-driver/add-driver.component';
import { EditDriverComponent} from './driver/edit-driver/edit-driver.component';
import { ListDriverComponent} from './driver/list-driver/list-driver.component';
import { ListVehicleComponent } from './vehicle/list-vehicle/list-vehicle.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './vehicle/edit-vehicle/edit-vehicle.component';



const routes: Routes = [
{ path:'drivers/create',component:AddDriverComponent},
{ path:'edit/:id',component:EditDriverComponent},
{ path:'drivers', component:ListDriverComponent},
{ path:'vehicle/create',component:AddVehicleComponent},
{ path:'editVehicle/:id',component:EditVehicleComponent},
{ path:'vehicle', component:ListVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
