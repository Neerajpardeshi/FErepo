import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeServiceService } from '../add-employee-service.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:any
  adminId:number=0
  password:string=""
  constructor(private service:AddEmployeeServiceService) { }

  ngOnInit(): void {
  }
  
  public authenticateNow(){
    let response=this.service.authenticateAdmin(this.adminId,this.password)
    response.subscribe(msg=>{
      this.message=msg
    })
  }



}