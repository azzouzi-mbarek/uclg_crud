
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { TokenService } from './token.service';
// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// import { Apollo } from 'apollo-angular';

// import gql from 'graphql-tag';
// import { environment } from 'src/environments/environment';



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private baseUrlGraphQl = environment.baseUrlGraphQL;
//   private baseUrlRest = environment.baseUrlRest;

//   login_query = gql`
//   mutation login ($email :String!  , $password : String!){
//   login(email: $email, password: $password) {
//     auth_token {
//       access_token
//       token_type
//       expires_in
//     }
//      error {
//       message
//     }
//   }
// }
// `;
//   signup_query = gql`
//   mutation createUser ($name : String! ,$email :String!  , $password : String! , $password_confirmation : String!){
//   createUser(name : $name ,email: $email, password: $password , password_confirmation : $password_confirmation) {
//     auth_token {
//       access_token
//       token_type
//       expires_in
//     }
//   }
// }
// `;

//   private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());

//   authStatus = this.loggedIn.asObservable();

//   changeAuthStatus(value: boolean) {
//     this.loggedIn.next(value);
//   }

//   constructor(
//     private http: HttpClient,
//     private token: TokenService,
//     private apollo: Apollo) {
//   }


//   signup(data) {
//     return this.apollo.mutate({
//       mutation: this.signup_query,
//       variables: {
//         name: data.name,
//         email: data.email,
//         password: data.password,
//         password_confirmation: data.password_confirmation,
//       }
//     });
//   }



//   login(data) {
//     return this.apollo.mutate({
//       mutation: this.login_query,
//       variables: {
//         email: data.email,
//         password: data.password
//       }
//     });
//   }

//   sendPasswordResetLink(data) {
//     return this.http.post(this.baseUrlRest + '/sendPasswordResetLink', data);
//   }

//   changePassword(data) {
//     return this.http.post(this.baseUrlRest + '/resetPassword', data);
//   }


// }


