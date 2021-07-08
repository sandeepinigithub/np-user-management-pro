import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  activeUser: any[] = [];
  isLoggedin: boolean = false;

  constructor() {
    if (localStorage.getItem('activeUser') != null) {
      this.activeUser = JSON.parse(localStorage.getItem('activeUser') || '');
    }
  }

  getLogin(): boolean {
    if (this.activeUser.length != 0) {
      this.isLoggedin = true;
      return this.isLoggedin;
    }
    else {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
  }
  setLogout(): void {
    localStorage.removeItem('activeUser');
    this.isLoggedin = false;
  }
  setLogin(){
    this.isLoggedin = true;
  }
}
