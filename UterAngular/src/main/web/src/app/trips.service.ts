import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trip} from './trip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private url:string;

  constructor(private http:HttpClient) { 
    this.url='http://localhost:8080/rest/trip';
  }


  public findAll():Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url+'/all')
 }

  public save(trip:Trip){
    return this.http.post<Trip>(this.url+'/save',trip);
  }


}
