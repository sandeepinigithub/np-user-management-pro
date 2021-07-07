import { Injectable } from '@angular/core';

export interface users {
  id: number;
  name: string;
  username: string;
  email: string;
  password: number;
  role: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tempList: users[] = [];

  constructor() { }

  addUser(user: any) {
    // console.log(user);
    if (localStorage.getItem('userList') !== null) {
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      user.id = Math.random().toString(36).substr(2, 9);
      this.tempList.push(user)
      localStorage.setItem('userList', JSON.stringify(this.tempList))
    }
    else {
      localStorage.setItem('userList', JSON.stringify(user))
    }


  }
  editUser(user: users) {
    if (localStorage.getItem('userList') !== null) {
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      const index = this.tempList.findIndex(c => c.id === user.id);
      this.tempList[index] = user;
      localStorage.setItem('userList', JSON.stringify(this.tempList));
    }

  }
  deleteUser(id: number) {
    if (localStorage.getItem('userList') !== null) {
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      const index = this.tempList.findIndex(c => c.id == id)
      this.tempList.splice(index, 1);
      localStorage.setItem('userList', JSON.stringify(this.tempList));

    }
  }
}
