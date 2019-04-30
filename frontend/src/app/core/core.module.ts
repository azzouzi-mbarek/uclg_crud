import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ErrorHandlerService,
  InstitutionService,
  InstitutionCategoryService,
  AuthService,
  TokenService,
  PersonService,
  AcademicLevelService,
} from './services';



@NgModule({
  providers: [
    ErrorHandlerService,
    InstitutionService,
    InstitutionCategoryService,
    PersonService,
    AcademicLevelService

  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ErrorHandlerService,
        InstitutionService,
        InstitutionCategoryService,
        PersonService,
        AcademicLevelService,
        AuthService,
        TokenService,
      ]
    };
  }
}
