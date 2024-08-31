import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DocauthService } from './docauth.service'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class DoctorauthguardService implements CanActivate {

  constructor(private docauthService: DocauthService, private router: Router) { }

  canActivate(): boolean {
    if (this.docauthService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['doclogin']);
      return false;
    }
  }
}
