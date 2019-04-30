import { Component, OnInit } from '@angular/core';
import {
  AcademicLevel,
  AcademicLevelService,
  ErrorHandlerService,
  MUTATION_UPDATE_ACADEMIC_LEVEL,
  MUTATION_CREATE_ACADEMIC_LEVEL
} from 'src/app/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { CustomValidators } from 'src/app/shared';

@Component({
  selector: 'app-modal-form-academic-level',
  templateUrl: './modal-form-academic-level.component.html',
  styleUrls: ['./modal-form-academic-level.component.scss']
})
export class ModalFormAcademicLevelComponent implements OnInit {
  // modal parms
  title: String;
  id: number;
  edit: Boolean;
  SubmitBtnTitle: String;


  academicLevel: AcademicLevel;
  academicLevels: any;
  AcademicLevelSubject: any;
  errors: any = [];
  // form category
  AcademicLevelForm: FormGroup;

  // validation form
  formErrors = {
    'name': '',
    'bac_level': '',
  };
  validationMessages = {
    'name': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 30 characters.',
      'update_unique': 'deja utitlisee',
    },
    'bac_level': {
      'email': 'enter a valid level.'
    },

  };

  constructor(
    private _BsModalRef: BsModalRef,
    private _academiqueLevelService: AcademicLevelService,
    private _errorHandler: ErrorHandlerService,
    private _fb: FormBuilder) { }

  ngOnInit() {



    this.AcademicLevelForm = this._fb.group({
      name: ['',
        [Validators.required, Validators.minLength(2), CustomValidators.updateUnique(this.academicLevels, this.academicLevel.id)]
      ],
      bac_level: [''],
    });

    this.AcademicLevelForm.valueChanges.subscribe(
      (data) => {
        this.logValidationErrors(this.AcademicLevelForm);
      }
    )


    // determinate edit of modal and initiate  object -  true if in edit

    this.edit = this.academicLevel.id !== null ? true : false;

    if (this.edit) {

      this.AcademicLevelForm.patchValue(this.academicLevel);

    }

    this.AcademicLevelSubject = new Subject();

    this.title = !this.edit ? 'Nouveau Niveau Academique :' : 'Éditer ' + this.academicLevel.name;
    this.SubmitBtnTitle = !this.edit ? 'Sauvegarder' : 'Éditer';





  }




  logValidationErrors(group: FormGroup = this.AcademicLevelForm): void {
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
    this.AcademicLevelForm.get(field).valueChanges.subscribe(
      value => {
        delete this.errors['name'];
        console.log(this.errors);
      }
    );
  }

  onDecline() {
    this._BsModalRef.hide();
  }

  mapFromValueToAcademicLevel() {
    this.academicLevel.name = this.AcademicLevelForm.value.name;
    this.academicLevel.bac_level = this.AcademicLevelForm.value.bac_level;
  }
  onSubmit() {
    this.mapFromValueToAcademicLevel()
    const mutation = this.edit ?
     MUTATION_UPDATE_ACADEMIC_LEVEL : MUTATION_CREATE_ACADEMIC_LEVEL;

    this._academiqueLevelService.academiqueLevelMutation(mutation, this.academicLevel)
      .subscribe(
        (res: any) => {
          console.log('onsabmit',res)
          const data = {
            academicLevel: this.edit ? res.data.updateAcademicLevel : res.data.createAcademicLevel,
            edit: this.edit ? true : false
          };
          this.AcademicLevelSubject.next(data);
          this._BsModalRef.hide();
        },
        (errors) => {
          this.formErrors = this._errorHandler.handleError(errors);
          console.log(this.errors);
        }
      );
  }

}
