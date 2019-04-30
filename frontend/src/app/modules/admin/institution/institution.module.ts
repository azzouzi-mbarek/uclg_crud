import { NgModule } from '@angular/core';

import { InstitutionRoutingModule } from './institution-routing.module';
import { SharedModule, ConfirmModalComponent } from 'src/app/shared';
import {
  InstitutionHomeComponent,
  InstitutionCategoryComponent,
  InstitutionInfoComponent,
  ModalFormInstitutionComponent,
  ModalFormInstitutionCategoryComponent
} from './components';

@NgModule({
  declarations: [
    InstitutionHomeComponent,
    InstitutionCategoryComponent,
    InstitutionInfoComponent,
    // modal components
    ModalFormInstitutionComponent,
    ModalFormInstitutionCategoryComponent,
  ],
  imports: [
    SharedModule,
    InstitutionRoutingModule
  ],
  providers: [],
  entryComponents: [
    ModalFormInstitutionComponent,
    ModalFormInstitutionCategoryComponent,
    ConfirmModalComponent
  ]
})
export class InstitutionModule { }
