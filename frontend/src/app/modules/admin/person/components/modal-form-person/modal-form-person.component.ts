import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  Person,
  ErrorHandlerService,
  AcademicLevel,
  QUERY_ACADEMIC_LEVELS,
  MUTATION_CREATE_PERSON,
  MUTATION_UPDATE_PERSON,
  PersonService,
  AcademicLevelService
} from 'src/app/core';
import { ModalFormAcademicLevelComponent } from '../modal-form-academic-level/modal-form-academic-level.component';


@Component({
  selector: 'app-modal-form-person',
  templateUrl: './modal-form-person.component.html',
  styleUrls: ['./modal-form-person.component.scss']
})
export class ModalFormPersonComponent implements OnInit {
  bsModalRefAcademicLevel: BsModalRef;

  // modal params
  title: String;
  id: number;
  edit: Boolean;
  SubmitBtnTitle: String;
  imageUrl = '/assets/img/p8.jpg'

  // person modal parms
  person: Person;
  persons: any;
  personSubject: any;
  academicLevels: any[];
  errors: any = [];

  // form params
  personForm: FormGroup;

  // validation form

  formErrors = {
    'first_name': '',
    'last_name': '',
    'sex': '',
    'birthday': '',
    'profession': '',
    'nationality': '',
    'study_area': '',
    'short_biography': '',
    'email': '',
    'number_phone': '',
    'academic_level_id': '',
  };

  validationMessages = {
    'first_name': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be greater than 2 characters.',
      'maxlength': 'First Name must be less than 30 characters.',
    },
    'last_name': {
      'required': 'last Name is required.',
      'minlength': 'last Name must be greater than 2 characters.',
      'maxlength': 'last Name must be less than 30 characters.',
    },
    'sex': {
      'required': 'sex id required'
    },
    'birthday': {
      'pattern': 'enter a valid birthday'
    },
    'profession': {
      'pattern': 'enter a valid profession'
    },
    'nationality': {
      'pattern': 'enter a valid nationality'
    },
    'study_area': {
      'pattern': 'enter a valid study area'
    },
    'short_biography': {
      'pattern': 'enter a valid biography'
    },

    'email': {
      'email': 'enter a valid email.'
    },
    'number_phone': {
      'pattern': 'enter a valid number_phone.'
    },
    'academic_level_id': {
      'pattern': 'select the Academique level  '
    },
  };

  constructor(
    private _BsModalRef: BsModalRef,
    private _modalService: BsModalService,
    private _personService: PersonService,
    private _academicLevelService: AcademicLevelService,
    private _errorHandler: ErrorHandlerService,
    private _fb: FormBuilder  ) { }

  ngOnInit() {

     // initiate forms
     this.personForm = this._fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      image_url: [''],
      sex: ['', [Validators.required]],
      birthday: [''],
      profession: [''],
      nationality: [''],
      study_area: [''],
      short_biography: [''],
      email: ['', [Validators.email]],
      number_phone: [''],
      academicLevel: this._fb.group({
        academic_level_id: ['']
      }),
    });

    // When any of the form control value in employee form changes
    // our validation function logValidationErrors() is called
    this.personForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.personForm);
      }
    )


    // determinate edit of modal and initiate institution object -  true if in edit

    this.edit = this.person.id !== null ? true : false;

    if (this.edit) {
      this.personForm.patchValue({ academicLevel: { academic_level_id: this.person.academicLevel.id } });
      this.personForm.patchValue(this.person);
    }

    this.personSubject = new Subject();

    this.title = !this.edit ? 'Nouvelle Personne' : this.person.first_name;
    this.SubmitBtnTitle = !this.edit ? 'Sauvegarder' : 'Éditer';

    // get categories 
    this._academicLevelService.getAcademicLevels(QUERY_ACADEMIC_LEVELS).valueChanges
      .subscribe(
        (res: any) => {
          this.academicLevels = res.data.academicLevels;
        },
        (errors) => { this._errorHandler.handleError(errors); }
      );

    console.log(this.persons);
  }


  logValidationErrors(group: FormGroup = this.personForm): void {
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

  mapFromValueToPerson() {
    this.person.first_name = this.personForm.value.first_name;
    this.person.last_name = this.personForm.value.last_name;
    this.person.image_url = this.personForm.value.image_url;
    this.person.sex = this.personForm.value.sex;
    this.person.birthday = this.personForm.value.birthday;
    this.person.email = this.personForm.value.email;
    this.person.nationality = this.personForm.value.nationality;
    this.person.number_phone = this.personForm.value.number_phone;
    this.person.profession = this.personForm.value.profession;
    this.person.short_biography = this.personForm.value.short_biography;
    this.person.study_area = this.personForm.value.study_area;
    this.person.academicLevel.id = this.personForm.value.academicLevel.academic_level_id;

  }

  onSubmit() {

    this.openModalFormAcademicLevel();

    const mutation = this.edit ?
      MUTATION_UPDATE_PERSON : MUTATION_CREATE_PERSON;

    this._personService.personMutation(mutation, this.person)
      .subscribe(
        (res: any) => {

          const data = {
            person: this.edit ? res.data.UpdatePerson : res.data.CreatePerson,
            edit: this.edit ? true : false
          };
          this.personSubject.next(data);
          this._BsModalRef.hide();
        },
        (errors) => {
          this.formErrors = this._errorHandler.handleError(errors);

        }
      );


  }


  openModalFormAcademicLevel(academicLevel: AcademicLevel = null) {

    // tslint:disable-next-line:no-shadowed-variable
    const initialState = {
      academicLevel: academicLevel,
    };

    this.bsModalRefAcademicLevel = this._modalService.show(ModalFormAcademicLevelComponent, { class: 'modal-lg', initialState });
    this.bsModalRefAcademicLevel.content.academicLevelSubject.subscribe(
      (res) => {

        this.academicLevels.push(res.academicLevel);

      });
  }

}
