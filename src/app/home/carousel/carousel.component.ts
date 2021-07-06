import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselData = [
    {
      imgSrc: "assets/banner1.png",
      logo: "assets/logo1.png",
      label1: {
        heading: "Social Impact",
        details: "Child Relief & You"
      },
      label2: {
        heading: "Project",
        details: "Fund Raising"
      },
      details: "Digital and Search marketing brand and crowd-funding campaigns"
    },
    {
      imgSrc: "assets/banner2.png",
      logo: "assets/logo2.png",
      label1: {
        heading: "Culture & Tourism",
        details: "UPDESCO"
      },
      label2: {
        heading: "Project",
        details: "U.P. Museums"
      },
      details: "Curated video tours for an immersive visitor experience at State Museums"

    },
    {
      imgSrc: "assets/banner3.png",
      logo: "assets/logo3.png",
      label1: {
        heading: "Public Sector",
        details: "Ministry of Skill Development and Entrepreneurship"
      },
      label2: {
        heading: "Project",
        details: "Sankalp"
      },
      details: "Skill acquisition and knowledge awareness for the promotion of community livelihood"
    },
    {
      imgSrc: "assets/banner4.png",
      logo: "assets/logo4.svg",
      label1: {
        heading: "Digital Automation",
        details: "Firefly Associates FZE"
      },
      label2: {
        heading: "Project",
        details: "Fusion"
      },
      details: "Quality audit and safety reporting software suite, specific to international airlines"
    },
    {
      imgSrc: "assets/banner5.png",
      logo: "assets/logo5.svg",
      label1: {
        heading: "Retail",
        details: "FabIndia"
      },
      label2: {
        heading: "Project",
        details: "FabConnect ERP"
      },
      details: "Enterprise-wide custom solution across all departments including Pos and Omnichannel"
    },
    {
      imgSrc: "assets/banner6.png",
      logo: "assets/logo6.svg",
      label1: {
        heading: "Telecommunication",
        details: "Bharti Airtel Ltd"
      },
      label2: {
        heading: "Project",
        details: "Airtel VTAP"
      },
      details: "A custom SmartBytes platform for over 2.0 million broadband customers"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
