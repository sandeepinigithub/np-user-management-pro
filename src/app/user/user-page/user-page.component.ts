import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  
  activeUser : any[] = [];
  toggleValue : boolean = true;
  constructor() {
    
   }

  ngOnInit(): void {
    if(sessionStorage.getItem('activeUser') !=null){
      this.activeUser=JSON.parse(sessionStorage.getItem('activeUser')|| '');
    }
    else{
      console.log("No Active User");      
    }   
  }

  active(){
    this.toggleValue = !this.toggleValue;
    let activeUserId:string;
    let userList:any[]=[];
    if(sessionStorage.getItem('activeUser') != null && localStorage.getItem('userList') !=null){
      activeUserId = JSON.parse(sessionStorage.getItem('activeUser') || '')[0].id; 
      userList = JSON.parse(localStorage.getItem('userList') || '');
      const index = userList.findIndex(c => c.id === activeUserId);
      userList[index].status = "active";
      localStorage.setItem('userList' , JSON.stringify(userList));
    }

  }
  inactive(){
    this.toggleValue = !this.toggleValue;
    let activeUserId:string;
    let userList:any[]=[];
    if(sessionStorage.getItem('activeUser') != null && localStorage.getItem('userList') !=null){
      activeUserId = JSON.parse(sessionStorage.getItem('activeUser') || '')[0].id; 
      userList = JSON.parse(localStorage.getItem('userList') || '');
      const index = userList.findIndex(c => c.id === activeUserId);
      userList[index].status = "inactive";
      localStorage.setItem('userList' , JSON.stringify(userList));
    }
    
  }

}
