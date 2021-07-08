import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  
  activeUser : any[] = [];
  constructor() {
    
   }

  ngOnInit(): void {
    if(localStorage.getItem('activeUser') !=null){
      this.activeUser=JSON.parse(localStorage.getItem('activeUser')|| '');
    }
    else{
      console.log("No Active User");
      
    }
    
  }

}
