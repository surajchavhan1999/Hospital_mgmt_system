import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css'] // Corrected property name
})
export class AdloginComponent {


username: string = '';
password: string = '';

inValidLogin = false;

constructor(private adminAdminService:AdminauthService,private router:Router) {}

checkLogin() {
  if (this.adminAdminService.authenticate(this.username,this.password)) {

   

    this.router.navigate(['admin']);
    this.inValidLogin=false
  } else {
    this.inValidLogin=true;
    alert('Wrong Credintials');
    this.router.navigate(['home']);
    
  }
}
}
