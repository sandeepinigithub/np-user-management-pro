import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  color:ThemePalette="primary";
  progressBar:boolean=false;
  signinError: boolean = false;
  tempList: any[] = [];
  signinData: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router,public authService : AuthService) { }

  ngOnInit(): void { }

  signinUser(data: any, signinForm: NgForm) { 
    setTimeout(() => {  
      this.progressBar=true;    
    }, 1);

    this.authService.setLogin();
    // console.log(data);
    if (localStorage.getItem('userList') != null) {
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
        setTimeout(() => {  
          this.progressBar=false; 
          this.router.navigate(['/user']);   
        }, 2000);
        
      }
      else if (adminType) {
        setTimeout(() => {  
          this.progressBar=false; 
          this.router.navigate(['/admin']);   
        }, 2000);
      }
      else {
        setTimeout(() => {  
          this.progressBar=false; 
          this.signinError = true;   
        }, 2000);
        
      }

    }
    else {
      signinForm.form.reset();
      alert("No user Found!! Please register")

    }    

  }

}
