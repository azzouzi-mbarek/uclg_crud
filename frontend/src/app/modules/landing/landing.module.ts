import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';


import { LandingRoutingModule } from './landing-routing.module';
import {
  HomeComponent,
  MapsComponent,
  NavBarComponent,
  RepositoryComponent,


} from './components';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    HomeComponent,
    MapsComponent,
    NavBarComponent,
    RepositoryComponent,
    LandingComponent
  ],
  imports: [
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
