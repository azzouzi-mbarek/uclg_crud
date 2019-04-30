import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'UCLG';
  ngOnInit() {

    document.body.className = 'landing-page no-skin-config top-navigation';
    document.body.setAttribute('id', 'page-top');
    document.body.style.paddingTop = '80px';
  }
}
