import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: {id:string,name:string,username:string,email:string,password:string,role:string,status:string}) { }

  ngOnInit(): void {
  }

}
