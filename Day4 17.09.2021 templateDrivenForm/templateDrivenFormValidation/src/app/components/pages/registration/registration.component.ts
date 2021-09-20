import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formdata={
    "fname":'',
    "lname":'',
    'email':'',
    'mobile':'',
    'department':'',
    'password':'',
    'confirmpassword':'',
    'address':''
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit(data:NgForm){
    console.log(data)
  }

  test(x:number){
    console.log("hi "+x)
  }

}
