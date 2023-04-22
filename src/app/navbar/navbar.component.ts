import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges{
  
  isLoggedIn: boolean = false;
  
  constructor(private authService: AuthServiceService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.isLoggedIn = this.authService.isAuthenticated();
      this.cdr.detectChanges();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnChanges(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.cdr.detectChanges();
  }
}
