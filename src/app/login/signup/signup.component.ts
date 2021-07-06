import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  t = '';
  tempList: any[] = [];

  signupData: any = {
    id: '',
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
    status: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  signupUser(data: any) {
    // console.log(data);  
    this.tempList = JSON.parse(localStorage.getItem('userList') || '');
    this.tempList.push(data)
    localStorage.setItem('userList', JSON.stringify(this.tempList))

  }

}
