import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Driver} from './driver'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private driverUrl:string;

  constructor(private http:HttpClient) {
    this.driverUrl='http://localhost:8080/rest/driver';
  }

  public findAll():Observable<Driver[]>{
     return this.http.get<Driver[]>(this.driverUrl+'/all')
  }

  public findById(id:number):Observable<Driver>{
    return this.http.get<Driver>(this.driverUrl+'/'+id);
  }

  public save(driver:Driver){
    return this.http.post<Driver>(this.driverUrl+'/save',driver);
  }

  public update(id:number,driver:Driver){
    return this.http.put<Driver>(this.driverUrl+'/update/'+id,driver);
  }

  public delete(id:number){
    return this.http.delete<Driver>(this.driverUrl+'/delete/'+id);
  }

  public findDriverAvailablesByDateAndLicense(date:String,license:String):Observable<Driver[]>{
    return this.http.get<Driver[]>(this.driverUrl+'/availablesByDateAndLicense/'+date+'/'+license);
  }


}
