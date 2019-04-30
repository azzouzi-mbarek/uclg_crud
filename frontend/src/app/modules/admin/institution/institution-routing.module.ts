import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionHomeComponent, InstitutionCategoryComponent } from './components';

const routes: Routes = [
  { path: 'institutions', component: InstitutionHomeComponent },
  { path: 'institution_categories', component: InstitutionCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionRoutingModule { }
