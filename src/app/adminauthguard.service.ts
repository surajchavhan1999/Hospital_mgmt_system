import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate {

  constructor(private adminAuthService:AdminauthService,private router:Router) { }

  canActivate():boolean
  {
     if(this.adminAuthService.isUserLoggedIn()){
       return true;
     }
     else{
       this.router.navigate(['adlogin'])
       return false
      }
  }
}
