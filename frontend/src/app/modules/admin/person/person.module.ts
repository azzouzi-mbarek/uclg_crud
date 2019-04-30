import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PersonRoutingModule } from './person-routing.module';

import { PersonsCategoryComponent } from './components/persons-category/persons-category.component';
import { PersonComponent } from './person.component';
import { AcademicLevelComponent } from './components/academic-level/academic-level.component';
import { PersonHomeComponent } from './components/person-home/person-home.component';
import { ModalFormPersonComponent } from './components/modal-form-person/modal-form-person.component';
import { ModalFormAcademicLevelComponent } from './components/modal-form-academic-level/modal-form-academic-level.component';
import { ConfirmModalComponent } from 'src/app/shared';

@NgModule({
  declarations: [
    PersonsCategoryComponent,
    PersonComponent,
    AcademicLevelComponent,
    PersonHomeComponent,
    //modal component
    ModalFormPersonComponent,
    ModalFormAcademicLevelComponent
  ],
  imports: [
    SharedModule,
    PersonRoutingModule
  ],
  entryComponents: [
    ModalFormPersonComponent,
    ModalFormAcademicLevelComponent,
    ConfirmModalComponent
  ]
})
export class PersonModule { }
