import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginComponent,
  SignupComponent,
  RequestResetComponent,
  ResponseResetComponent
} from './components';

import { BeforeLoginService } from './guards';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: 'request-password-reset', component: RequestResetComponent },
  { path: 'response-password-reset', component: ResponseResetComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
