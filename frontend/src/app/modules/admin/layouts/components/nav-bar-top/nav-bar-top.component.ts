import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


import { AuthService, TokenService } from 'src/app/core';
import { smoothlyMenu } from 'src/app/shared';
declare var jQuery: any;

@Component({
  selector: 'app-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.css']
})
export class NavBarTopComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService) {
  }

  ngOnInit() {


  }


  logout(event: MouseEvent) {
    event.preventDefault();
    // this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('login');
    // this.token.remove();

  }


  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }




}
