import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "src/app/services/employee.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Angular 9 Project!"

  months = ["January", "Feburary", "March", "April", "May", 
        "June", "July", "August", "September",
        "October", "November", "December"];

  isavailable = false; //variable is set to true
  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {
    console.log(this._empService)
  }

  myClickFunction(event)  {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Show Me");
    console.log(event)
    this.isavailable = false;
  }

  changeMonth(event){
    alert("Changed month from the Dropdown");
    console.log(event);
  }
}
