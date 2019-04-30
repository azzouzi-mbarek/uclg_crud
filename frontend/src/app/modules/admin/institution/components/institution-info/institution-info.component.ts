import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap';


import { Institution, INSTITUTION_QUERY, ErrorHandlerService, InstitutionService } from 'src/app/core';


@Component({
  selector: 'app-institution-info',
  templateUrl: './institution-info.component.html',
  styleUrls: ['./institution-info.component.css']
})
export class InstitutionInfoComponent implements OnInit {
  // datatable parms
  loadingIndicator: Boolean = true;
  rows = [];
  secondes: number;


  perPage = 5;
  tableMessages = {
    emptyMessage: 'Aucune donnée à afficher',
    totalMessage: 'total'
  };
  selected = [];
  private _id: number;
  institution = new Institution();
  constructor(
    private _route: ActivatedRoute,
    private _institutionService: InstitutionService,
    private _modalService: BsModalService,
    private _toaster: ToastrService,
    private _router: Router,

    private _errorHandler: ErrorHandlerService

  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');

      this._institutionService.getInstitution(INSTITUTION_QUERY, this._id)
        .subscribe(
          (res: any) => {
            this.institution = res.data.institution;
          },
          (errors) => { this._errorHandler.handleError(errors); }
        );
    });
  }

}
