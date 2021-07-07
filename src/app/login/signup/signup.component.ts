import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupSuccess: boolean = false;
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

  signupUser(data: any, signupForm: NgForm) {
    let duplicateCheck: boolean = false
    // console.log(Math.random().toString(36).substr(2,9));
    data.id = Math.random().toString(36).substr(2, 9);
    // console.log(data);
    if (localStorage.getItem('userList') == null) {
      this.tempList.push(data);
      localStorage.setItem('userList', JSON.stringify(this.tempList));
    }
    else {
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      this.tempList.forEach(function (user) {
        if (user.email === data.email) {
          alert("User/Admin with this email already exit \n Please use another email")
          duplicateCheck = true;
        }
      });
      if (!duplicateCheck) {
        this.tempList.push(data);
        localStorage.setItem('userList', JSON.stringify(this.tempList));

      }


    }

    signupForm.form.reset();
    this.signupSuccess = true;


  }

}
