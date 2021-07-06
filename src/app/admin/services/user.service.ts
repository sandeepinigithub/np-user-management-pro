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
  userList: users[] = [
    {
      "id": 1,
      "name": "Sandeep Kumar Shukla",
      "username": "sandeepini",
      "email": "sandeepini.2012@gmail.com",
      "password": 123456789,
      "role": "admin",
      "status": "active"
    },


  ]

  constructor() { }

  addUser(user: any) {
    console.log(user);
    this.tempList = JSON.parse(localStorage.getItem('userList') || '');
    if (this.tempList.length === 0) {
      this.tempList = this.userList;
      
    }
    this.tempList.push(user)
      localStorage.setItem('userList', JSON.stringify(this.tempList))

  }
  editUser(user: users) {
    this.tempList = JSON.parse(localStorage.getItem('userList') || '');
    const index = this.tempList.findIndex(c => c.id === user.id);
    this.tempList[index] = user;
    localStorage.setItem('userList', JSON.stringify(this.tempList));
  }
  deleteUser(id: number) {
    this.tempList = JSON.parse(localStorage.getItem('userList') || '');
    if (this.tempList.length != 0) {
      const user = this.tempList.findIndex(c => c.id == id)
      this.tempList.splice(user, 1);
      localStorage.setItem('userList', JSON.stringify(this.tempList));
    }
    else{
      const user = this.userList.findIndex(c => c.id == id)
      this.userList.splice(user, 1);
    }

  }
}
