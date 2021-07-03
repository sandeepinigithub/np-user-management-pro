import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works:any = [
    {
      name:"Card title",
      description:"Some quick example text to build on the card title and make up the bulk of the card's content",
      imgUrl:"../../assets/works-1.jpg"
    },
    {
      name:"Card title",
      description:"Some quick example text to build on the card title and make up the bulk of the card's content",
      imgUrl:"../../assets/works-2.jpg"
    },
    {
      name:"Card title",
      description:"Some quick example text to build on the card title and make up the bulk of the card's content",
      imgUrl:"../../assets/works-3.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
