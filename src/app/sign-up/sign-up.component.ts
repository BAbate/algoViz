import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  username: string ="";
  password: string="";
  department: string="";
  studentIdNumber: string="";
  departments = ['Computer Science', 'Computer Engineering', 'Electrical Engineering'];

  constructor(){

  }
  onSubmit() {
    // Handle form submission
  }

}
