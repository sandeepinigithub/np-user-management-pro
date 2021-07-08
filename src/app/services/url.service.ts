import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  href: string;

  constructor(private router: Router) { }

  getUrl() {
    this.href = this.router.url;
  }
  getLoginPageStatus() {
    this.getUrl();
    // console.log(this.href);
    // console.log(this.href.split("/")[this.href.split("/").indexOf("login")]);
    if ((this.href.split("/")[this.href.split("/").indexOf("login")]) === "login") {
      return true;
    }
    return false;
  }
  getUserPageStatus() {
    this.getUrl();
    if ((this.href.split("/")[this.href.split("/").indexOf("user")]) === "user") {
      return true;
    }
    return false;
  }
  getAdminPageStatus() {
    this.getUrl();
    if ((this.href.split("/")[this.href.split("/").indexOf("admin")]) === "admin") {
      return true;
    }
    return false;

  }
  getNotFoundPageStatus() {
    this.getUrl();
    if ((this.href.split("/")[this.href.split("/").indexOf("not-found")]) === "not-found") {
      return true;
    }
    return false;

  }
}
