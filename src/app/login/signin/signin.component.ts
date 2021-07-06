import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  tempList: any[] = [];
  signinData: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  signinUser(data: any) {
    console.log(data);
    this.tempList = JSON.parse(localStorage.getItem('userList') || '');
    if (this.tempList.length != 0) {
      let userType = false;
      let adminType = false;
      let activeUser  : any[] = [];
      this.tempList.forEach(function (user) {
        // console.log(user);

        if ((user.email === data.email) && (user.password === data.password) && (user.role === "user" || user.role === "User")) {
          // console.log("reached");                    
          userType = true;
          activeUser.push(user)
          localStorage.setItem('activeUser',JSON.stringify(activeUser));
        }
        if ((user.email === data.email) && (user.password === data.password) && (user.role === "admin" || user.role === "Admin")) {
          // console.log("reached");                    
          adminType = true;
          localStorage.setItem('activeUser',JSON.stringify(activeUser));
        }
      });
      if (userType) {
        this.router.navigate(['/user']);
      }
      if (adminType) {
        this.router.navigate(['/admin']);
      }

    }

  }


}
