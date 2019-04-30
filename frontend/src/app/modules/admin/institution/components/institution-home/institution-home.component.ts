import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { Router, ActivatedRoute } from '@angular/router';

import { ModalFormInstitutionComponent } from '../modal-form-institution/modal-form-institution.component';
import { ConfirmModalComponent } from 'src/app/shared';
import {
  Institution,
  ErrorHandlerService,
  INSTITUTIONS_QUERY,
  DELETE_INSTITUTION_MUTATION,
  INSTITUTION_QUERY,
  InstitutionService
} from 'src/app/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-institution-home',
  templateUrl: './institution-home.component.html',
  styleUrls: ['./institution-home.component.scss']
})
export class InstitutionHomeComponent implements OnInit {
  @ViewChild(DatatableComponent) private table: DatatableComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  // datatable parmsviewInit
  loadingIndicator: Boolean = true;
  rows = [];
  perPage = 5;

  tableMessages = {
    emptyMessage: 'Aucune donnée à afficher',
    totalMessage: 'total'
  };

  // modal parms
  bsModalRef: BsModalRef;
  bsModalRefinfo: BsModalRef;
  bsModelConfirm: BsModalRef;

  institution: Institution;
  institutionsList: Institution[];

  errors = [];
  logoUrl = 'assets/img/camera.png';

  initialState = {};

  dataSource: MatTableDataSource<any>;
  searchKey: string;
  displayedColumns: string[] = ['name', 'actions'];

  constructor(
    private _institutionService: InstitutionService,
    private _modalService: BsModalService,
    private _toaster: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.getInstitutions();

  }


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }



  /**
   * get institutions
   *
   */
  getInstitutions() {
    this._institutionService.getInstitutions(INSTITUTIONS_QUERY)
      .valueChanges
      .subscribe(
        (res: any) => {

          this.institutionsList = res.data.institutions;
          this.dataSource = new MatTableDataSource(this.institutionsList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.rows = [...this.institutionsList];
          this.loadingIndicator = false;
        },
        (error) => { this._errorHandler.handleError(error); }
      );
  }

  /**
   * Opens modal form institution
   * @param [id] 
  /**
   *
   *
   * @param {number} [id=null]
   */
  openModalFormInstitution(id: number = null) {
    if (id !== null) {
      this._institutionService.getInstitution(INSTITUTION_QUERY, id)
        .subscribe(
          (res: any) => {

            this.initialState = {
              institution: res.data.institution,
              institutions: this.institutionsList,
            };

            this.openModal(this.initialState);
          },
          (errors) => { this._errorHandler.handleError(errors); },

        );
    } else {
      this.initialState = {
        institution: new Institution(),
        institutions: this.institutionsList,
      };
      this.openModal(this.initialState);
    }
  }

  /**
   * Opens modal
   * @param initialState 
   */
  openModal(initialState) {

    this.bsModalRef = this._modalService.show(ModalFormInstitutionComponent, {
      class: 'modal-lg',
      backdrop: 'static',
      initialState,
    });

    this.bsModalRef.content.institutionSubject.subscribe(
      (res) => {
        if (res.edit) {
          this._toaster.info('<h3>Catégorie modifiée avec succès</h3>', ' ', {
            'timeOut': 4000,
            'progressBar': true,
            'enableHtml': true
          });
        } else {
          this._institutionService.updateCache(INSTITUTIONS_QUERY, res.institution);
          //update datatable rows
          this.dataSource.data=this.institutionsList;

          this.rows = [...this.institutionsList];

          this._toaster.success('<h3>Catégorie ajoutée avec succès</h3>', ' ', {
            'timeOut': 3000,
            'progressBar': true,
            'enableHtml': true
          });
        }
      }
    )
  }


  goToInfoInstitution(id) {
    this._router.navigate([id], {
      relativeTo: this._route
    });
  }


  // delete functions
  onClickDelete(id) {
    // tslint:disable-next-line:no-shadowed-variable
    const initialState = {
      message: 'Êtes-vous sûr de vouloir supprimer cette Institutions ?',
      state: 'danger'
    };

    this.bsModelConfirm = this._modalService.show(ConfirmModalComponent, { initialState });

    this.bsModelConfirm.content.onClose.subscribe(
      (response: Boolean) => {
        if (response) {
          this._institutionService.delete(DELETE_INSTITUTION_MUTATION, id).
            subscribe(
              (res) => {
                this.dataSource = new MatTableDataSource(this.institutionsList);

                this._toaster.error('<h3>Catégorie supprimée avec succès</h3>', ' ', {
                  'timeOut': 3000,
                  'progressBar': true,
                  'enableHtml': true
                });

              }
            );
          this.bsModelConfirm.hide();
        }
      }
    );
  }
}

