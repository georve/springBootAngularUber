import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDriverComponent} from './driver/add-driver/add-driver.component';
import { EditDriverComponent} from './driver/edit-driver/edit-driver.component';
import { ListDriverComponent} from './driver/list-driver/list-driver.component';



const routes: Routes = [
{ path:'drivers/create',component:AddDriverComponent},
{ path:'edit/:id',component:EditDriverComponent},
{ path:'drivers', component:ListDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
