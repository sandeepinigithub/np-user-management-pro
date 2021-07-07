import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit , DoCheck {

  href:string = "";
  loginPageActive:boolean=true;
  constructor(private router: Router) { }

  ngOnInit():void {}

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

  }

}
