import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLoggedIn = false;

  constructor() { }

  setLogin() {
    // this.isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', JSON.stringify(true));

  }

  setLogout() {
    // this.isLoggedIn = false;
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('activeUser');
  }

  getLogin() {
    // return this.isLoggedIn ;
    if (sessionStorage.getItem('isLoggedIn') != null) {
      return JSON.parse(sessionStorage.getItem('isLoggedIn') || '');
    }
    else {
      return false
    }

  }
}
