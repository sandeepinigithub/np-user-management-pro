import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works:any = [
    {
      name:"Fund Raising",
      description:"Digital and Search marketing brand and crowd-funding campaigns",
      imgUrl:"assets/banner1.png"
    },
    {
      name:"U.P. Museums",
      description:"Curated video tours for an immersive visitor experience at State Museums",
      imgUrl:"assets/banner2.png"
    },
    {
      name:"Sankalp",
      description:"Skill acquisition and knowledge awareness for the promotion of community livelihood",
      imgUrl:"assets/banner3.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
