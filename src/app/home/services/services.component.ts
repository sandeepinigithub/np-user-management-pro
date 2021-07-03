import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services:any = [
    {
      name:"Quasi reiciendis",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass:"fas fa-phone-alt fa-3x text-danger p-4 text-center shadow"
    },
    {
      name:"Quasi reiciendis",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass:"fas fa-heart fa-3x text-danger p-4 text-center shadow"
    },
    {
      name:"Quasi reiciendis",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass:"fas fa-user-alt fa-3x text-danger p-4 text-center shadow"
    },
    {
      name:"Quasi reiciendis",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass:"fas fa-search fa-3x text-danger p-4 text-center shadow"
    },
    {
      name:"Quasi reiciendis",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass:"fas fa-thumbs-up fa-3x text-danger p-4 text-center shadow"
    },
    {
      name:"Quasi reiciendis",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum earum voluptas eaque porro molestias?",
      iconClass:"fas fa-eye-slash fa-3x text-danger p-4 text-center shadow"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
