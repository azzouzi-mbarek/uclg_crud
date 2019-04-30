
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsCategoryComponent } from './components/persons-category/persons-category.component';
import { PersonHomeComponent } from './components/person-home/person-home.component';
import { AcademicLevelComponent } from './components/academic-level/academic-level.component';

const routes: Routes = [

  { path: 'persons', component: PersonHomeComponent },
  { path: 'person_categories', component: PersonsCategoryComponent },
  { path: 'academic_levels', component: AcademicLevelComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
