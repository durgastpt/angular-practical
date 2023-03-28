import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EppTableServicesService {

  constructor(private http:HttpClient) { }
  url= "https://qaapi.jahernotice.com/api/Epp/0"

  epptabledata(data:any){
    return this.http.get( this.url ,data)
  }
}
