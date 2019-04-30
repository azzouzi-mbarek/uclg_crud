import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { ModalFormInstitutionCategoryComponent } from '../modal-form-institution-category/modal-form-institution-category.component';
import {
  DELETE_INSTITUTION_CATEGORY_MUTATION,
  INSTITUTION_CATEGORIES_QUERY,
  InstitutionCategory,
  InstitutionCategoryService,
  ErrorHandlerService,
  CATEGORY_QUERY
} from 'src/app/core';

import { ToastrService } from 'ngx-toastr';

import { ConfirmModalComponent } from 'src/app/shared';
import { DataSource } from '@angular/cdk/table';
import { Apollo } from 'apollo-angular';

@Component({

  selector: 'app-institution-category',
  templateUrl: './institution-category.component.html',
  styleUrls: ['./institution-category.component.css']
})
export class InstitutionCategoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;


  bsModalRef: BsModalRef;
  bsModelConfirm: BsModalRef;
  loadingIndicator: Boolean = true;
  categories: InstitutionCategory[];
  errors: any;
  category = new InstitutionCategory();
  rows = [];
  perPage = 5;
  tableMessages = {
    emptyMessage: 'Aucune donnée à afficher',
    totalMessage: 'total'
  };
  selected = [];
  initialState = {};
  dataSource: MatTableDataSource<any>;
  searchKey: string;
  


  displayedColumns: string[] = ['name', 'actions'];


  private _searchTerm;



  constructor(
    private _institutionCategoryService: InstitutionCategoryService,
    private _modalService: BsModalService,
    private _toaster: ToastrService,
    private _errorHandler: ErrorHandlerService,
    private _apollo: Apollo) { }

  ngOnInit() {
    this.getCategories();
    // console.log(this.dataSource)
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }




  onSelect({ selected }) {


    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {


  }





  getCategories() {
    this._institutionCategoryService.getCategories(INSTITUTION_CATEGORIES_QUERY)
      .valueChanges
      .subscribe(
        (res: any) => {

          this.categories = res.data.institutionCategories;
          this.dataSource = new MatTableDataSource(this.categories);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;


          this.rows = [...res.data.institutionCategories];
          this.loadingIndicator = false;
        },
        (error) => { console.log(error); }
      );


  }





  onClickDelete(row) {
    // tslint:disable-next-line:no-shadowed-variable
    const initialState = {
      message: 'Êtes-vous sûr de vouloir supprimer cette Catégorie ?',
      state: 'danger'
    };

    this.bsModelConfirm = this._modalService.show(ConfirmModalComponent, { initialState });

    this.bsModelConfirm.content.onClose.subscribe(
      (response: Boolean) => {
        if (response) {
          this.delete(row);
          this.bsModelConfirm.hide();
          this._toaster.error('<h3>Catégorie supprimée avec succès</h3>', ' ', {
            'timeOut': 3000,
            'progressBar': true,
            'enableHtml': true
          });
        }
      }
    );

  }

  delete(row) {
    this._institutionCategoryService.delete(DELETE_INSTITUTION_CATEGORY_MUTATION, row).
      subscribe(
        (res) => {
          const i = this.categories.findIndex(e => e.id === row.id);
          if (i !== -1) {
            this.categories.splice(i, 1);
            this.dataSource = new MatTableDataSource(this.categories);
            console.log('1', this.categories)


          }
        },
        (errors) => {
          this.errors = this._errorHandler.handleError(errors);
        }

      );
  }


  /**
    * Opens modal form 
    * @param [id] 
   /**
    *
    *
    * @param {number} [id=null]
    */
   openModalFormInstitutionCategory(id: number = null) {
    if (id !== null) {
      this._institutionCategoryService.getCategory(CATEGORY_QUERY, id)
        .subscribe(
          (res: any) => {

            this.initialState = {
              category: res.data.category,
              categories: this.categories,
            };

            console.log(this.category)
            this.openModal(this.initialState);
          },
          (errors) => { this._errorHandler.handleError(errors); },

        );
    } else {
      this.initialState = {
        category: new InstitutionCategory(),
        categories: this.categories,
      };
      this.openModal(this.initialState);
    }
  }

  /**
   * Opens modal
   * @param initialState 
   */
  openModal(initialState) {

    this.bsModalRef = this._modalService.show(ModalFormInstitutionCategoryComponent, {
      class: 'modal-lg',
      backdrop: 'static',
      initialState,
    });
    console.log(initialState)

    this.bsModalRef.content.categorySubject.subscribe(
      (res) => {
        if (res.edit) {
          this._toaster.info('<h3>Catégorie modifié avec succès</h3>', ' ', {
            'timeOut': 4000,
            'progressBar': true,
            'enableHtml': true
          });
        } else {
          this._institutionCategoryService.updateCache(INSTITUTION_CATEGORIES_QUERY, res.category);
          //update datatable rows
          this.dataSource.data=this.categories;
          console.log('datasource',this.dataSource,'res data', this.categories)

          this._toaster.success('<h3>Catégorie ajouté avec succès</h3>', ' ', {
            'timeOut': 3000,
            'progressBar': true,
            'enableHtml': true
          });
        }
      }
    )
  }

//   private refreshTable() {
//     // If there's no data in filter we do update using pagination, next page or previous page
//     if (this.dataSource.filterChange.getValue() === '') {
//       if (this.dataSource.paginator.pageIndex === 0) {
//         this.dataSource.paginator.nextPage();
//         this.dataSource.paginator.previousPage();
//       } else {
//         this.dataSource.paginator.previousPage();
//         this.dataSource.paginator.nextPage();
//       }
//       // If there's something in filter, we reset it to 0 and then put back old value
//     } else {
//       this.dataSource.filter = '';
//       this.dataSource.filter = this.filter.nativeElement.value;
//     }
// }


  // openModalFormInstitutionCategory(category: InstitutionCategory = null) {

  //   // tslint:disable-next-line:no-shadowed-variable
  //   const initialState = {
  //     category: category,
  //   };

  //   this.bsModalRef = this._modalService.show(ModalFormInstitutionCategoryComponent, { class: 'modal-lg', initialState });
  //   this.bsModalRef.content.categorySubject.subscribe(
  //     (res) => {
  //       console.log(res.edit);
  //       if (res.edit) {

  //         this._toaster.info('<h3>Catégorie modifiée avec succès</h3>', ' ', {
  //           'timeOut': 4000,
  //           'progressBar': true,
  //           'enableHtml': true
  //         });
  //       } else {
  //         this.categories.push(res.category);
  //         this.dataSource = new MatTableDataSource(this.categories);

  //         this._toaster.success('<h3>Catégorie ajoutée avec succès</h3>', ' ', {
  //           'timeOut': 3000,
  //           'progressBar': true,
  //           'enableHtml': true
  //         });
  //       }
  //     },
  //     (errors) => {
  //       this.errors = this._errorHandler.handleError(errors);
  //     }
  //   );

  // }















}



