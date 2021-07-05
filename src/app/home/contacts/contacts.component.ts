import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  feedbacks: any = [{ name: 'Sandeep Kumar Shukla', email: 'sandeepini.2012@gmail.com', message: 'Website is awesome!' }];

  feedbackData: any = {
    name: '',
    email: '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }
  sendFeedback(data: any) {
    // console.log(data);
    this.feedbacks.push(data);
    localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks))
    alert("Feedback send !! ")
    this.formDataClear(this.feedbackData)
  }
  formDataClear(formdData : any){
    formdData.name='';
    formdData.email='';
    formdData.message='';
  }

}
