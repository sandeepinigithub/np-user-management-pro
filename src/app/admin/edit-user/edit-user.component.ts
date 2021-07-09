import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit{
  userForm: FormGroup;

  constructor(private userService: UserService,@Inject(MAT_DIALOG_DATA) public data: {id:string,name:string,username:string,email:string,password:string,role:string,status:string}) { }


  ngOnInit(): void {
    //Form Add 
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      status: new FormControl(''),
    });
    //data value for edit
    this.userForm.setValue(this.data);
  }
  get form() { return this.userForm.controls };

  saveEdit(user:any) {
    if (user != null) {
      // console.log(user);
      this.userService.editUser(this.userForm.value);
    }
    else{
      alert("Please fill empty field");
    }

  }

}
