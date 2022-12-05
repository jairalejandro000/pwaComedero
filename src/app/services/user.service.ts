import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private router: Router) { }

  comederos(){
    return this.http.get(`${environment.API_URL}User/Raspberries`);
  }
  profile(){
    return this.http.get(`${environment.API_URL}User/profile`);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  sensors(id?: number){
    return this.http.get(`${environment.API_URL}RaspSensor/Sensors/` + id);
  }
}
