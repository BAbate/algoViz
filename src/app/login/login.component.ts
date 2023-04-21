import { Router } from '@angular/router';
import { AuthGuardService } from './../auth-guard.service';
import { AuthServiceService } from './../auth-service.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private http: HttpClient, private authService: AuthServiceService, private authGuard: AuthGuardService, private router:Router) {}
     
    login(form: NgForm) {
      this.username = form.value['username'];
      this.password = form.value['password'];
      if (this.authService.login(this.username,this.password)){
            if (this.authGuard.canActivate()){
              console.log("here");
              this.router.navigate(['module']);
            }
      }
  }

}
