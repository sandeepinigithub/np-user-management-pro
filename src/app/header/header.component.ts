import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  href: string = "";
  loginPageActive: boolean = true;
  hideSigninSignup: boolean = true;
  constructor(private router: Router, public authService: AuthService) { }

  ngDoCheck(): void {
    this.href = this.router.url;
    // console.log(this.href);
    // console.log(this.href.split("/")[this.href.split("/").indexOf("login")]);
    if ((this.href.split("/")[this.href.split("/").indexOf("login")]) === "login") {
      this.loginPageActive = false;

    }
    else {
      this.loginPageActive = true;
    }
  }
  logout(){
    this.authService.setLogout();    
  }
}
