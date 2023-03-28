import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  constructor(private http: HttpClient) { }
  url = 'https://qaapi.jahernotice.com/Admin/OTP/verify'
  data: any
  otpservicedata(data: any) {
    return this.http.post(this.url, data)
  }

}
