import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  getUseRegisterdata(arg0: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
url = 'https://qaapi.jahernotice.com/Admin/SignUp'
data:any
  registerservicedata(data:any){
return this.http.post(this.url , data)
  }
}
