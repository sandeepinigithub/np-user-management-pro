import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {

  feedbacks: any[] = [];
  tempFeedbacks: any[] = [];
  tempMsg = "No feedbacks available";

  constructor() {
    this.tempFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '');
    if(this.tempFeedbacks.length !=0){
      this.feedbacks = this.tempFeedbacks
    }
    else{
      alert(this.tempMsg);
    }
  }

  ngOnInit(): void {
  }

}
