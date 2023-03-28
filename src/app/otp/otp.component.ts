import { Component, OnInit } from '@angular/core';
import { OtpService } from '../services/otp.service';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  private id: any;
  constructor(
    private otpserv: OtpService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.id = this.route.snapshot.paramMap.get("id");

    this.otpform.patchValue({
      id: this.id
    });

  }

  public otpform = new FormGroup({
    otp: new FormControl('', [Validators.required]),
    id: new FormControl()
  })

  otpsubmit() {
    console.log(this.otpform.value);

    this.otpserv.otpservicedata(this.otpform.value).subscribe((data: any) => {
      console.log(data)
    })
  }
}
