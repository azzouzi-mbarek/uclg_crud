import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DatatableComponent, DataTableColumnDirective } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import {
  MUTATION_DELETE_ACADEMIC_LEVEL,
  AcademicLevel,
  AcademicLevelService,
  ErrorHandlerService,
  QUERY_ACADEMIC_LEVELS,
  QUERY_ACADEMIC_LEVEL,
  
} from 'src/app/core';
import { ModalFormAcademicLevelComponent } from '../modal-form-academic-level/modal-form-academic-level.component';
import { ConfirmModalComponent } from 'src/app/shared';

@Component({
  selector: 'app-academic-level',
  templateUrl: './academic-level.component.html',
  styleUrls: ['./academic-level.component.scss']
})
export class AcademicLevelComponent implements OnInit {
  // @ViewChild(DataTableColumnDirective) dtElement: DataTableColumnDirective;
  bsModalRef: BsModalRef;
  bsModelConfirm: BsModalRef;
  loadingIndicator: Boolean = true;

  academicLevels: AcademicLevel[];
  academicLevel = new AcademicLevel();
  rows = [];
  errors: any;

  perPage = 5;
  tableMessages = {
    emptyMessage: 'Aucune donnée à afficher',
    totalMessage: 'total'
  };
  initialState = {};

  selected = [];
  private _id: Number;
  private _searchTerm;

  constructor(
    private _academicLevelService: AcademicLevelService,
    private _modalService: BsModalService,
    private _toaster: ToastrService,
    private _errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.getAcademicLevels();
  }

  onSelect({ selected }) {


    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {

  }

  getAcademicLevels() {
    this._academicLevelService.getAcademicLevels(QUERY_ACADEMIC_LEVELS)
      .valueChanges
      .subscribe(
        (res: any) => {
          console.log(res.data)
          this.academicLevels = res.data.academicLevels;
          this.rows = [...res.data.academicLevels];
          this.loadingIndicator = false;
        },
        (error) => { console.log(error); }

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
  openModalFormAcademicLevel(id: number = null) {
    if (id !== null) {
      this._academicLevelService.getAcademicLevel(QUERY_ACADEMIC_LEVEL, id)
        .subscribe(
          (res: any) => {

            this.initialState = {
              academicLevel: res.data.academicLevel,
              academicLevels: this.academicLevels,
            };

            this.openModal(this.initialState);
          },
          (errors) => { this._errorHandler.handleError(errors); },

        );
    } else {
      this.initialState = {
        academicLevel: new AcademicLevel(),
        academicLevels: this.academicLevels,
      };
      this.openModal(this.initialState);
    }
  }

  /**
   * Opens modal
   * @param initialState 
   */
  openModal(initialState) {

    this.bsModalRef = this._modalService.show(ModalFormAcademicLevelComponent, {
      class: 'modal-lg',
      backdrop: 'static',
      initialState,
    });

    this.bsModalRef.content.AcademicLevelSubject.subscribe(
      (res) => {
        if (res.edit) {
          this._toaster.info('<h3>Niveau Academique modifié avec succès</h3>', ' ', {
            'timeOut': 4000,
            'progressBar': true,
            'enableHtml': true
          });
        } else {
          this._academicLevelService.updateCache(QUERY_ACADEMIC_LEVELS, res.academicLevel);
          //update datatable rows
          this.rows = [...this.academicLevels];

          this._toaster.success('<h3>Niveau Academique ajouté avec succès</h3>', ' ', {
            'timeOut': 3000,
            'progressBar': true,
            'enableHtml': true
          });
        }
      }
    )
  }


  onDelete(id) {
    // tslint:disable-next-line:no-shadowed-variable
    const initialState = {
      message: 'Êtes-vous sûr de vouloir supprimer cet Niveau Academique ?',
      state: 'danger'
    };

    this.bsModelConfirm = this._modalService.show(ConfirmModalComponent, { initialState });

    this.bsModelConfirm.content.onClose.subscribe(
      (response: Boolean) => {
        if (response) {
          this._academicLevelService.delete(MUTATION_DELETE_ACADEMIC_LEVEL, id).
            subscribe(
              (res) => {
                this._toaster.info('<h3>Niveau Academique supprimé avec succès</h3>', ' ', {
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
