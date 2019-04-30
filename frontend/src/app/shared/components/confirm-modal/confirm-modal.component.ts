import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {


  message: String;
  state: String = 'default';


  public onClose: Subject<boolean>;


  constructor(private _modalRef: BsModalRef) {
  }


  onDecline(): void {

    this.onClose.next(false);
    this._modalRef.hide();
  }

  onConfirm(): void {

    this.onClose.next(true);

  }


  ngOnInit() {
    this.onClose = new Subject();
  }

}
