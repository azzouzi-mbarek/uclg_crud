import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private baseUrl = environment.baseUrlGraphQL;
  // private iss = {
  //   login: this.baseUrl + '/login',
  //   signup: this.baseUrl + '/signup'
  // };


  private iss = {
    login: this.baseUrl,
    signup: this.baseUrl
  };

  constructor() {
  }


  handle(token) {
    this.set(token);

  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();

    if (token) {
      const payload = this.payload(token);

      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }


  decode(payload) {

    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();  // return true if valid
  }

}
