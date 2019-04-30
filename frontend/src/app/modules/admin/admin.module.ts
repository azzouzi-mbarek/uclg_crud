import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

import { SharedModule } from 'src/app/shared';

import { NavBarTopComponent, NavLeftComponent } from './layouts/components';

@NgModule({
  declarations: [
    AdminComponent,

    NavBarTopComponent,
    NavLeftComponent,

  ],

  imports: [
    SharedModule,
    AdminRoutingModule,


  ]
})
export class AdminModule { }
