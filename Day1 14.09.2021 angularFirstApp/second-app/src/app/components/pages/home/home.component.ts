import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "this is a home page";
  message = 'Welcome to noida';
  message1 = 'Welcome';
  countries:string[]

  constructor() { 
    this.countries=["india","usa","china","russiya"]
  }

  ngOnInit(): void {
  }

}
