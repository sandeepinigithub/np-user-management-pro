import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginPageActive: boolean = true;
  constructor(private router: Router, public authService: AuthService , public path : UrlService) { }

  ngOnInit(): void {}
  logout(){
    this.authService.setLogout();    
  }
}
