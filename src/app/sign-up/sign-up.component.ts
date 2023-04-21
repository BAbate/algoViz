import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  onSubmit(form: NgForm) {
    // Handle form submission
    console.log(form.value);
  }

}
