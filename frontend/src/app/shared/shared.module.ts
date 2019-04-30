import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {
  ModalModule,
} from 'ngx-bootstrap';

import { ToastrModule } from 'ngx-toastr';

import { ConfirmModalComponent } from './components';
import { MatIconModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,


    // BsDatepickerModule.forRoot(),
    // BsDropdownModule.forRoot(),
    // CollapseModule.forRoot(),
    // AccordionModule.forRoot(),
    // TabsModule.forRoot(),
    // PaginationModule.forRoot(),

  ],
  exports: [

    // ng modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,

    // third modules
    NgxDatatableModule,
    // NgxSpinnerModule,
    // NgxPaginationModule,
    // NgxChartsModule,
    // NgxEasypiechartModule,
    // EasyPieChartModule,
    // MorrisJsModule,
    // DataTablesModule,
    // NgSelectModule,
    // NgxSelectModule,
    // NgxPageScrollModule,
    // PaginationModule,

    // components
    ConfirmModalComponent,

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
