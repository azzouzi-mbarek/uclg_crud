import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GraphQLModule } from './graphql.module';


import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    //angular
    BrowserModule,
    BrowserAnimationsModule,

    // 3rd party
    AuthModule,


    // core and shared
    CoreModule.forRoot(),
    SharedModule.forRoot(),

    // app
    AppRoutingModule,

    GraphQLModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
