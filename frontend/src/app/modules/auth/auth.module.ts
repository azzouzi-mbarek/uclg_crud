import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

import {
  LoginComponent,
  SignupComponent,
  RequestResetComponent,
  ResponseResetComponent
} from './components';

import { BeforeLoginService, AfterLoginService, AuthGuard } from './guards';

@NgModule({
  imports: [


    AuthRoutingModule,

    HttpClientModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  providers: [
    BeforeLoginService,
    AfterLoginService,
    AuthGuard
  ],
})
export class AuthModule { }
