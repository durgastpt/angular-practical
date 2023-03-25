import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor( private http : HttpClient) { }

  url = 'https://qaapi.jahernotice.com/Admin/SignIn'

  loginservice(data : any){
    return this.http.post(this.url , data)
  }
}
