import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle} from './vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private vehicleUrl:string;

  constructor(private http:HttpClient) {
    this.vehicleUrl='http://localhost:8080/rest/vehicle';
  }

  public findAll():Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.vehicleUrl+'/all')
 }

 public findById(id:number):Observable<Vehicle>{
   return this.http.get<Vehicle>(this.vehicleUrl+'/'+id);
 }

 public save(driver:Vehicle){
   return this.http.post<Vehicle>(this.vehicleUrl+'/save',driver);
 }

 public update(id:number,driver:Vehicle){
   return this.http.put<Vehicle>(this.vehicleUrl+'/update/'+id,driver);
 }

 public delete(id:number){
   return this.http.delete<Vehicle>(this.vehicleUrl+'/delete/'+id);
 }

 public findVehicleAvailablesByDate(date:String):Observable<Vehicle[]>{
  return this.http.get<Vehicle[]>(this.vehicleUrl+'/availablesByDate/'+date);
}




}
