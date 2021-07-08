import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(){}

  setLogin() {
    this.isLoggedIn = true;
  }

  setLogout() {
    this.isLoggedIn = false;
  }

  getLogin() {
    return this.isLoggedIn;
  }
}
