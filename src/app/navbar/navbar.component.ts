import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isLoggedIn: boolean = sessionStorage.getItem('isLoggedIn') ? true : false;
  
  constructor(private authService: AuthServiceService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
