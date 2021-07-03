import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features:any = [
    {
      name:"Optimize Code",
      description : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-code fa-3x text-danger"

    },
    {
      name:"Mobile Friendly",
      description : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-mobile-alt fa-3x text-danger"

    },
    {
      name:"Support",
      description : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-question-circle fa-3x text-danger"

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
