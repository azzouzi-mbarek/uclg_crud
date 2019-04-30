import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs';


import {
  InstitutionCategory,
  ErrorHandlerService,
  MUTATION_UPDATE_INSTITUTION_CATEGORY,
  MUTATION_CREATE_INSTITUTION_CATEGORY,
  InstitutionCategoryService
} from 'src/app/core';
import { CustomValidators } from 'src/app/shared';


@Component({
  selector: 'app-modal-form-institution-category',
  templateUrl: './modal-form-institution-category.component.html',
  styleUrls: ['./modal-form-institution-category.component.css']
})
export class ModalFormInstitutionCategoryComponent implements OnInit {


  // modal parms
  title: String;
  id: number;
  state: Boolean;
  edit: Boolean;

  SubmitBtnTitle: String;

  // category params
  category: InstitutionCategory;
  categories: any;
  categorySubject: any;
  errors: any =[];

  // form category
  institutionCategoryForm: FormGroup;

  // validation form
  formErrors = {
    'name': '',
  };
  validationMessages = {
    'name': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 30 characters.',
      'update_unique': 'deja utitlisee',
    },

  };
  constructor(
    private _BsModalRef: BsModalRef,
    private _institutionCategoryService: InstitutionCategoryService,
    private _errorHandler: ErrorHandlerService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    console.log('oninit',this.category)


    this.institutionCategoryForm = this._fb.group({
      name: ['',
        [Validators.required, Validators.minLength(2), CustomValidators.updateUnique(this.categories, this.category.id)]
      ],
    });
    this.institutionCategoryForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.institutionCategoryForm);
      }
    )


    // this.initErrors('name');


  this.edit = this.category.id !== null ? true : false;

    if (this.edit) {

      this.institutionCategoryForm.patchValue(this.category);

    }

    this.categorySubject = new Subject();

    this.title = !this.edit ? 'Nouveau Niveau categorie :' : 'Éditer ' + this.category.name;
    this.SubmitBtnTitle = !this.edit ? 'Sauvegarder' : 'Éditer';
  }


  logValidationErrors(group: FormGroup = this.institutionCategoryForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && abstractControl.invalid
          && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });

  }


  initErrors(field) {
    this.institutionCategoryForm.get(field).valueChanges.subscribe(
      value => {
        delete this.errors['name'];
        console.log(this.errors);
      }
    );
  }



  onDecline() {
    this._BsModalRef.hide();
  }

  mapFromValueToCategory() {

    this.category.name = this.institutionCategoryForm.value.name;
  }

  onSubmit() {

    this.mapFromValueToCategory();
    const mutation = this.edit ?
    MUTATION_UPDATE_INSTITUTION_CATEGORY : MUTATION_CREATE_INSTITUTION_CATEGORY;
    
    

    this._institutionCategoryService.institutionCategoryMutation(mutation, this.category)
    .subscribe(
      (res: any) => {
        console.log('onsabmit',res)
        const data = {
          category: this.edit ? res.data.UpdateInstitutionCategory : res.data.CreateInstitutionCategory,
          edit: this.edit ? true : false
          
        };
        console.log(this.category)
        this.categorySubject.next(data);
        this._BsModalRef.hide();
      },
      (errors) => {
        this.formErrors = this._errorHandler.handleError(errors);
        console.log(this.errors);
      }
    );

  }



}
