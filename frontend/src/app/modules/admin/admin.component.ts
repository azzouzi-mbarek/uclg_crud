import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  loggedIn: any;
  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit() {
    document.body.className = ' md-skin';
    document.body.style.paddingTop = '0px';

    // this._auth.authStatus.subscribe(value => this.loggedIn = value);

  }

}
