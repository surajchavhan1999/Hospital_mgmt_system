import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {



  username: string = '';
  password: string = '';
  inValidLogin = false;

  constructor() {}

  checkLogin() {}

  authenticate(username2: string, password2: string): boolean {
    if (username2 === 'ram' && password2 === 'ram123') {
      sessionStorage.setItem('username2', username2);
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn(){
    console.log("user succefully login")
    let user=sessionStorage.getItem('username2');
     return !(user==null)
  }
  logout(){
    console.log("user successfully logout")
    sessionStorage.removeItem('username2');
   
  }
}

