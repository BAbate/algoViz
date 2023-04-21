import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'abate') {
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
  }

}
