import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinError: boolean = false;
  tempList: any[] = [];
  signinData: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void { }

  signinUser(data: any, signinForm: NgForm) {
    // console.log(data);
    if (localStorage.getItem('userList') != null) {
      let error: boolean;
      let userType = false;
      let adminType = false;
      let activeUser: any[] = [];
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      this.tempList.forEach(function (user) {
        // console.log(user);
        if ((user.email === data.email) && (user.password === data.password) && (user.role === "user" || user.role === "User")) {
          // console.log("reached");                    
          userType = true;
          activeUser.push(user)
          localStorage.setItem('activeUser', JSON.stringify(activeUser));
        }
        if ((user.email === data.email) && (user.password === data.password) && (user.role === "admin" || user.role === "Admin")) {
          // console.log("reached");                    
          adminType = true;
          activeUser.push(user)
          localStorage.setItem('activeUser', JSON.stringify(activeUser));
        }
      });
      if (userType) {
        this.router.navigate(['/user']);
      }
      else if (adminType) {
        this.router.navigate(['/admin']);
      }
      else {
        this.signinError = true
      }

    }
    else {
      signinForm.form.reset();
      alert("No user Found!! Please register")

    }

  }


}
