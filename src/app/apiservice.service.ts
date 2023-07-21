import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url:string='https://reqres.in/api/users?page=1';

  constructor(private http:HttpClient) { }

  getApiMethod(){
   return this.http.get(this.url);
  }
}
