import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService, private router:Router) { }

  canActivate():boolean {
    if (!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
