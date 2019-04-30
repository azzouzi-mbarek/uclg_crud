import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  ErrorHandlerService,
  AuthService,
  TokenService
} from 'src/app/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  public form = {
    email: null,
    password: null
  };

  public errors: any = [];

  constructor(
    private _auth: AuthService,
    private token: TokenService,
    private router: Router,
    private _errorHandlerService: ErrorHandlerService
  ) {
  }

  ngOnInit() {
    document.body.style.paddingTop = '80px';
  }


  onSubmit() {
    this._auth.login(this.form);
    // this.auth.login(this.form).subscribe(
    //   (response) => {

    //     this.handleResponse(response.data.login);
    //   },

    //   (errors) => {

    //     this.errors = this._errorHandlerService.handleError(errors);
    //     console.log(this.errors);
    //   }

    // );
  }


  handleResponse(data) {

    this.errors = [];
    // this.token.handle(data.auth_token.access_token);
    // this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin');


  }



  goToLanding() {
    this.router.navigate(['landing/home']);
  }
}
