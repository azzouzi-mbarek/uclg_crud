import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import {
  Person,
  ErrorHandlerService,
  PERSONS_QUERY,
  PERSON_QUERY,
  MUTATION_DELETE_PERSON,
  PersonService
} from 'src/app/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalFormPersonComponent } from '../modal-form-person/modal-form-person.component';
import { ConfirmModalComponent } from 'src/app/shared';

@Component({
  selector: 'app-person-home',
  templateUrl: './person-home.component.html',
  styleUrls: ['./person-home.component.scss']
})
export class PersonHomeComponent implements OnInit {
  @ViewChild(DatatableComponent) private table: DatatableComponent;

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

  person: Person;
  personList: Person[];

  errors = [];
  initialState = {};



  constructor(
    private _personService: PersonService,
    private _modalService: BsModalService,
    private _toaster: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.getPersons()
  }


  getPersons() {
    this._personService.getPersons(PERSONS_QUERY)
      .valueChanges
      .subscribe(
        (res: any) => {

          console.log(res.data)
          this.personList = res.data.persons;
          this.rows = [...res.data.persons];
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
  openModalFormPerson(id: number = null) {
    if (id !== null) {
      this._personService.getPerson(PERSON_QUERY, id)
        .subscribe(
          (res: any) => {

            this.initialState = {
              person: res.data.person,
              persons: this.personList,
            };

            this.openModal(this.initialState);
          },
          (errors) => { this._errorHandler.handleError(errors); },

        );
    } else {
      this.initialState = {
        person: new Person(),
        persons: this.personList,
      };
      this.openModal(this.initialState);
    }
  }

  /**
   * Opens modal
   * @param initialState 
   */
  openModal(initialState) {

    this.bsModalRef = this._modalService.show(ModalFormPersonComponent, {
      class: 'modal-lg',
      backdrop: 'static',
      initialState,
    });

    this.bsModalRef.content.personSubject.subscribe(
      (res) => {
        if (res.edit) {
          this._toaster.info('<h3>Personne modifiée avec succès</h3>', ' ', {
            'timeOut': 4000,
            'progressBar': true,
            'enableHtml': true
          });
        } else {
          this._personService.updateCache(PERSONS_QUERY, res.person);
          //update datatable rows
          this.rows = [...this.personList];

          this._toaster.success('<h3>personne ajoutée avec succès</h3>', ' ', {
            'timeOut': 3000,
            'progressBar': true,
            'enableHtml': true
          });
        }
      }
    )
  }

// delete functions
onDelete(id) {
  // tslint:disable-next-line:no-shadowed-variable
  const initialState = {
    message: 'Êtes-vous sûr de vouloir supprimer cette Personne ?',
    state: 'danger'
  };

  this.bsModelConfirm = this._modalService.show(ConfirmModalComponent, { initialState });

  this.bsModelConfirm.content.onClose.subscribe(
    (response: Boolean) => {
      if (response) {
        this._personService.delete(MUTATION_DELETE_PERSON, id).
          subscribe(
            (res) => {
              this._toaster.info('<h3>personne supprimée avec succès</h3>', ' ', {
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
