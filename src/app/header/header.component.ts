import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck , OnChanges{

  href:string = "";
  loginPageActive:boolean=true;
  hideSigninSignup:boolean=true;
  isLoggedin : boolean = false;
  constructor(private router: Router ,private authService : AuthService) { }

  ngDoCheck(): void {
    this.href = this.router.url;
    // console.log(this.href);
    // console.log(this.href.split("/")[this.href.split("/").indexOf("login")]);
    if ((this.href.split("/")[this.href.split("/").indexOf("login")]) === "login") {
      this.loginPageActive = false;

    }
    else{
      this.loginPageActive = true;
    }  
    
    this.isLoggedin = this.authService.getLogin();
    
  }
  ngOnChanges(){
    this.isLoggedin = this.authService.getLogin();
  }

  logout(){
    this.authService.setLogout();
  }
}
