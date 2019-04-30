import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { LOGIN_QUERY } from '../queries';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  private _loggedUser: any;

  constructor(

    private apollo: Apollo
  ) {
  }


  // signup(data) {
  //   return this.apollo.mutate({
  //     mutation: SIGNUP_QUERY,
  //     variables: {
  //       name: data.name,
  //       email: data.email,
  //       password: data.password,
  //       password_confirmation: data.password_confirmation,
  //     }
  //   });
  // }



  login(data) {
    this.apollo.mutate({
      mutation: LOGIN_QUERY,
      variables: {
        email: data.email,
        password: data.password
      }
    }).subscribe(
      (response) => { this._doLoginUser(response); }
    );
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  private _doLoginUser(response) {

    this._loggedUser = response.data.login.user;

    this.storeTokens(response.data.login.auth_token);
  }

  storeTokens(tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private _getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }


  logout() {

  }



}


