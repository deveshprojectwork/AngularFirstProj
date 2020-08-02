import { Component } from '@angular/core';
import { User } from "./user"
import {EnrollmentService} from "./enrollment.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];

  topicHasError = true;
  submitted = false; 
  errorMsg = "";

  // below value can come from the API
  userModel = new User("Rob","robert@test.com",1234567890, "default", "morning", true);
  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value==="default"){
      this.topicHasError = true;
    }
    else
    {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm){
    console.log(userForm);
    // this.submitted = true; 
    // // console.log(this.userModel)
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log("Sucess",data),
    //   // error => console.error("Error!",error)
    //   error => this.errorMsg = error.statusText
    // )
  }
}
