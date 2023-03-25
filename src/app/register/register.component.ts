import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from '../services/registerservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private registrservice: RegisterserviceService,
    private toastr: ToastrService
  ) {}
  public registerform = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
    MobileNo: new FormControl('', [Validators.required]),
  });

  getUseRegisterdata() {
    this.registrservice
      .registerservicedata(this.registerform.value)
      .subscribe((data: any) => {
        console.log(data);
        this.toastr.error('Something went wrong');

        if (data.status == 200) {
          this.toastr.success(data.data.message);
          // location.reload()
        } else if (data.status == 412) {
          this.toastr.error(data.data.message);
        } else this.toastr.error('Something went wrong');
      });
  }
}
