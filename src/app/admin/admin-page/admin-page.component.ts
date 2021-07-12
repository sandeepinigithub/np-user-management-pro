import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { CalenderComponent } from '../calender/calender.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UserService } from '../services/user.service';
import { ViewUserComponent } from '../view-user/view-user.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, DoCheck {

  users: any[] = [];
  tempList: any[] = [];
  searchField: any;
  viewData: any = [];
  formHeading: string;
  fBtnText: string;
  editFlag: boolean = false;
  editUser: any = [];
  userForm: FormGroup;

  activeUser: any[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {
    if (localStorage.getItem('userList') != null) {
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      this.users = this.tempList;
    }
    else {
      alert("No user available!!")
    }

  }

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

    if (sessionStorage.getItem('activeUser') != null) {
      this.activeUser = JSON.parse(sessionStorage.getItem('activeUser') || '');
    }
  }
  ngDoCheck() {
    if (localStorage.getItem('userList') !== null) {
      this.tempList = JSON.parse(localStorage.getItem('userList') || '');
      this.users = this.tempList
    }

  }

  get form() { return this.userForm.controls };

  view(user: any) {
    this.viewData = user;
    console.log(user)
  }


  delete(id: number) {
    this.userService.deleteUser(id);
  }
  addOrEdit(user?: any) {
    if (user != null) {
      this.editFlag = true;
      this.editUser = user;
      this.formHeading = "Edit User Details";
      this.fBtnText = "Save Changes";
      console.log(user);
      this.userForm.setValue(user);
    }
    if (!this.editFlag) {
      this.userService.addUser(this.userForm.value);
      this.userForm.reset()
    }

  }

  saveChanges() {
    this.userService.editUser(this.userForm.value);
  }

  addHeading() {
    this.formHeading = "Add User";
    this.fBtnText = "Add";
    this.editFlag = false;
    this.userForm.reset()
  }

  addUserDialog() {
    this.dialog.open(AddUserComponent, { disableClose: true, width: '500px' });
  }
  editUserDialog(user: any) {
    const dialogRef = this.dialog.open(EditUserComponent, { disableClose: true, width: '500px', data: user });
  }
  viewUserDialog(user: any) {
    this.dialog.open(ViewUserComponent, {
      disableClose: true, width: '500px',
      height: '70%', data: user
    });
  }

}