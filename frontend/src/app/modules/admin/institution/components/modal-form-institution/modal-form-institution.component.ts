import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalFormInstitutionCategoryComponent } from '../modal-form-institution-category/modal-form-institution-category.component';

import { CustomValidators } from 'src/app/shared/validators/costum.validators';
import {
  Institution,
  ErrorHandlerService,
  InstitutionCategory,
  INSTITUTION_CATEGORIES_QUERY,
  MUTATION_CREATE_INSTITUTION,
  MUTATION_UPDATE_INSTITUTION,
  InstitutionService,
  InstitutionCategoryService
} from 'src/app/core';




@Component({
  selector: 'app-modal-form-institution',
  templateUrl: './modal-form-institution.component.html',
  styleUrls: ['./modal-form-institution.component.css']
})
export class ModalFormInstitutionComponent implements OnInit {

  bsModalRefCategory: BsModalRef;
  title: String;
  id: number;
  edit: Boolean;
  SubmitBtnTitle: String;
  imageUrl = '/assets/img/camera.png';

  // institution modal parms
  institution: Institution;
  institutions: any;
  institutionSubject: any;
  categories: any[];
  errors: any = [];
  // form params
  institutionForm: FormGroup;
  // validation form
  formErrors = {
    'name': '',

    'email': '',
    'acronym': '',
    'foundation_year': '',
    'web_site': '',
    'category_id': '',
    'phone': '',
  };
  validationMessages = {
    'name': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 30 characters.',
      'update_unique': 'deja utitlisee',
    },
    'email': {
      'email': 'enter a valid email.'
    },
    'acronym': {
      'minlength': 'Acronym must be greater than 2 characters.'
    },
    'category_id': {
      'required': 'Category is required'
    },
    'foundation_year': {
      'pattern': 'enter a valid year'
    },
    'web_site': {
      'pattern': 'enter a valid Web Url'
    },
    // 'phone': {
    //   'pattern': 'enter a valid phone'
    // }
  };

  constructor(
    private _BsModalRef: BsModalRef,
    private _modalService: BsModalService,
    private _institutionService: InstitutionService,
    private _institutionCategoryService: InstitutionCategoryService,
    private _errorHandler: ErrorHandlerService,
    private _fb: FormBuilder) {


  }






  ngOnInit() {

    // initiate forms
    this.institutionForm = this._fb.group({
      name: ['',
        [Validators.required, Validators.minLength(2), CustomValidators.updateUnique(this.institutions, this.institution.id)]
      ],
      acronym: ['', [Validators.minLength(2), Validators.maxLength(30)]],
      description: [''],
      foundation_year: ['', [Validators.pattern('^[12][0-9]{3}$')]],
      country_seat: [''],
      organe_tutelle: [''],
      areas_intervention: [''],
      target_beneficiary: [''],
      phone: [''],
      email: ['', [Validators.email]],
      // tslint:disable-next-line: max-line-length
      web_site: ['', [Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
      address: [''],
      localisation: [''],
      category: this._fb.group({
        category_id: ['', [Validators.required]]
      }),
    });

    // When any of the form control value in employee form changes
    // our validation function logValidationErrors() is called
    this.institutionForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.institutionForm);
      }
    )


    // determinate edit of modal and initiate institution object -  true if in edit

    this.edit = this.institution.id !== null ? true : false;

    if (this.edit) {
      this.institutionForm.patchValue({ category: { category_id: this.institution.category.id } });
      this.institutionForm.patchValue(this.institution);
    }

    this.institutionSubject = new Subject();

    this.title = !this.edit ? 'Nouvelle Institution' : this.institution.name;
    this.SubmitBtnTitle = !this.edit ? 'Sauvegarder' : 'Éditer';

    // get categories 
    this._institutionCategoryService.getCategories(INSTITUTION_CATEGORIES_QUERY).valueChanges
      .subscribe(
        (res: any) => {
          this.categories = res.data.institutionCategories;
        },
        (errors) => { this._errorHandler.handleError(errors); }
      );

    console.log(this.institutions);
  }


  logValidationErrors(group: FormGroup = this.institutionForm): void {
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





  onDecline() {
    this._BsModalRef.hide();
  }



  mapFormValueToInstitution() {
    this.institution.name = this.institutionForm.value.name;
    this.institution.acronym = this.institutionForm.value.acronym;
    this.institution.description = this.institutionForm.value.description;
    this.institution.foundation_year = this.institutionForm.value.foundation_year;
    this.institution.country_seat = this.institutionForm.value.country_seat;
    this.institution.organe_tutelle = this.institutionForm.value.organe_tutelle;
    this.institution.areas_intervention = this.institutionForm.value.areas_intervention;
    this.institution.target_beneficiary = this.institutionForm.value.target_beneficiary;
    this.institution.phone = this.institutionForm.value.phone;
    this.institution.email = this.institutionForm.value.email;
    this.institution.web_site = this.institutionForm.value.web_site;
    this.institution.address = this.institutionForm.value.address;
    this.institution.localisation = this.institutionForm.value.localisation;
    this.institution.category.id = this.institutionForm.value.category.category_id;
  }



  onSubmit() {

    this.mapFormValueToInstitution();

    const mutation = this.edit ?
      MUTATION_UPDATE_INSTITUTION : MUTATION_CREATE_INSTITUTION;

    this._institutionService.institutionMutation(mutation, this.institution)
      .subscribe(
        (res: any) => {

          const data = {
            institution: this.edit ? res.data.UpdateInstitution : res.data.CreateInstitution,
            edit: this.edit ? true : false
          };
          this.institutionSubject.next(data);
          this._BsModalRef.hide();
        },
        (errors) => {
          this.formErrors = this._errorHandler.handleError(errors);

        }
      );


  }



  // handleFlagInput(file: FileList) {
  //   this.imageToUpload = file.item(0);
  //   const extension = this.imageToUpload.name.split('.')[1].toLocaleLowerCase();

  //   if (['jpg', 'png', 'jpeg'].includes(extension.toLowerCase())) {
  //     const reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.imageUrl = event.target.result;
  //     };
  //     reader.readAsDataURL(this.imageToUpload);

  //     this.errorFlag = null;
  //   } else {

  //     this.errorFlag = 'Choose file with JPEG - JPG - PNG Format !';
  //   }
  // }




  openModalFormInstitutionCategory(category: InstitutionCategory = null) {

    // tslint:disable-next-line:no-shadowed-variable
    const initialState = {
      category: category,
    };

    this.bsModalRefCategory = this._modalService.show(ModalFormInstitutionCategoryComponent, { class: 'modal-lg', initialState });
    this.bsModalRefCategory.content.categorySubject.subscribe(
      (res) => {

        this.categories.push(res.category);

      });
  }







}

