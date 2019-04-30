
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  {

    path: '', component: AdminComponent,
    children: [

      { path: '', loadChildren: './person/person.module#PersonModule' },
      { path: '', loadChildren: './institution/institution.module#InstitutionModule' },


    ],


  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],

  exports: [RouterModule]
})
export class AdminRoutingModule { }
