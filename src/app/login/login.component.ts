import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor ( private logindata : LoginserviceService , private toastr : ToastrService ){

  }

  public loginform = new FormGroup ({
    Email : new FormControl("", [Validators.required]),
    Password: new FormControl ("", [(Validators.required)])
})
  

getuserlogindata(){
  this.logindata.loginservice(this.loginform.value).subscribe((data:any)=>{
    console.log(data)


    if ( data.status == 200){

    }

    this.toastr.success('login successfully')

  
  })
}
}
