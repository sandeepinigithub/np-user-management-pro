import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  tempFeedbacks: any = [];
  feedbacks: any = [];
  feedbackSuccess: boolean = false;

  feedbackData: any = {
    name: '',
    email: '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }
  sendFeedback(data: any, feedback: NgForm) {
    // console.log(data);
    if (localStorage.getItem('feedbacks') == null) {
      this.feedbacks.push(data);
      localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks));
      feedback.form.reset();
      this.feedbackSuccess = true;
    }
    else {
      this.feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '');
      this.feedbacks.push(data);
      localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks));
      feedback.form.reset();
      this.feedbackSuccess = true;
    }

  }

}
