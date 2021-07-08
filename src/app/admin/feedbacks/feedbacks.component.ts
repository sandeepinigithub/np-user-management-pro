import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {

  feedbacks: any[] = [];
  tempFeedbacks: any[] = [];
  msg = "No feedbacks available";

  constructor() {
    if (localStorage.getItem('feedbacks') != null) {
      this.tempFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '');
      this.feedbacks = this.tempFeedbacks
    }

  }

  ngOnInit(): void {
  }

}
