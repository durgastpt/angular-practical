import { Component } from '@angular/core';
import { EppTableServicesService } from '../services/epp-table-services.service';

@Component({
  selector: 'app-epp-table',
  templateUrl: './epp-table.component.html',
  styleUrls: ['./epp-table.component.css']
})
export class EppTableComponent {

  user:any
  users:any


  constructor( eppservice : EppTableServicesService){

  
   eppservice.epptabledata(this.user).subscribe((data:any)=>{
      // console.log("data", data.data);
      this.users = data.data

      console.log(this.users);
      


    })
  }
  }


