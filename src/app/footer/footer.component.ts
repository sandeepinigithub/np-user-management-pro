import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  href:string = "";
  loginPageActive:boolean=true;
  constructor(private router: Router, public path: UrlService) { }

  ngOnInit():void {}

}
