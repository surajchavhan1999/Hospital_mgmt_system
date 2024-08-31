import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {
  username: string = '';
  password: string = '';
  inValidLogin = false;

  constructor() {}

  checkLogin() {
    // Implementation here (if needed)
  }

  authenticate(username: string, password: string): boolean {
    if (username === 'suraj' && password === 'suraj123') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    console.log("User Doctor successfully logged in");
    let user = sessionStorage.getItem('username');
    return user !== null;
  }

  logout() {
    console.log("User Doctor successfully logged out");
    sessionStorage.removeItem('username');
    // Optional: Redirect to login or home page
  }
}
