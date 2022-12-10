import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComedero } from '../interfaces/comedero';

@Injectable({
  providedIn: 'root'
})
export class ComederoService {
  comedero?: IComedero;
  constructor(private http: HttpClient) { }

  pet(id?: number){
    return this.http.get(`${environment.API_URL}Raspberry/` + id);
  }
  new(comedero?: IComedero){
    return this.http.post(`${environment.API_URL}Raspberry/Create`, comedero);
  }
  addSensors(id?: number){
    return this.http.get(`${environment.API_URL}RaspSensor/AddSensors/` + id);
  }
  history(id?: number){
    return this.http.get(`${environment.API_URL}SensorValues/History/` + id)
  }
}