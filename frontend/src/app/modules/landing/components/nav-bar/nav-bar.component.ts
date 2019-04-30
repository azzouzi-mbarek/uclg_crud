import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService, AuthService } from 'src/app/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  loggedIn: any;
  auth_url = ['/login', '/signup'];

  constructor(
    private _token: TokenService,
    private auth: AuthService,
    public router: Router
  ) { }
  page = '';
  ngOnInit() {

    // this.loggedIn = this._token.loggedIn();
    document.body.style.paddingTop = '80px';
  }


  goToLogin() {
    this.router.navigate(['login']);
  }


  goToAdmin() {
    this.router.navigate(['admin']);
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }


  logout(event: MouseEvent) {
    event.preventDefault();
    // this.auth.changeAuthStatus(false);
    this._token.remove();
    this.loggedIn = this._token.loggedIn();
    this.router.navigate(['/login']);
  }


}
