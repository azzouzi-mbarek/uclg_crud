import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  ErrorHandlerService,
  AuthService,
  TokenService
} from 'src/app/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public errors = [];

  constructor(private _auth: AuthService,
    private _token: TokenService,
    private _router: Router,
    private _errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {


  }

  onSubmit() {
    // this.auth.signup(this.form).subscribe(
    //   response => this.handleResponse(response.data.createUser),
    //   error => this.errors = this._errorHandlerService.handleError(error)
    // )
    //   ;
  }



  goToLanding() {
    this._router.navigate(['landing/home']);
  }
  goToLogin() {
    this._router.navigate(['login']);
  }
  goToAdmin() {
    this._router.navigate(['/admin']);
  }




  handleResponse(data) {
    // this.errors = [];
    // this.token.handle(data.auth_token.access_token);
    // this.auth.changeAuthStatus(true);

    // this.goToAdmin();

  }


}
