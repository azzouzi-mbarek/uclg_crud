
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  MapsComponent,
  RepositoryComponent
} from './components';
import { LandingComponent } from './landing.component';



const landingRoutes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'repository', component: RepositoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
