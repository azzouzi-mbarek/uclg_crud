import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService, TokenService } from 'src/app/core';



declare var jQuery: any;

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit, AfterViewInit {
  public menuExpanded = true;
  public classActive = false;
  isCollapsed = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService,

  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    // jQuery('#side-menu').metisMenu();
    jQuery('#side-menu').metisMenu({
      toggle: true // disable the auto collapse. Default: true.
    });

    jQuery('#side-menu ul li').click(function () {
      // remove active class
      //  jQuery('#side-menu li a').removeClass('active');
      //  // add active class
      //  jQuery(this).addClass('active');
      //   // remove active class
      //   jQuery('#side-menu li ul').removeClass('in');
      //   // add active class
      //   jQuery(this).addClass('in');
      // jQuery(this).parent().addClass('active').siblings().removeClass('active');
      // $('#side-menu').removeClass('in');
      // $(this).addClass("active");
      // $(this).closest('ul').addClass('in');
    });
  }
  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    // this.auth.changeAuthStatus(false);

    this.token.remove();
  }
}
