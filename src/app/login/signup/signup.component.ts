import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  t='';

  signupData : any ={
    id:'',
    name:'',
    username:'',
    email:'',
    password:'',
    role:'',
    status:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  signupUser(data:any){
    console.log(data);    

  }

}
