import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLoggedIn = false;

  constructor() { }

  setLogin() {
    // this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', JSON.stringify(true));

  }

  setLogout() {
    // this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  getLogin() {
    // return this.isLoggedIn ;
    if (localStorage.getItem('isLoggedIn') != null) {
      return JSON.parse(localStorage.getItem('isLoggedIn') || '');
    }
    else {
      return false
    }

  }
}
