import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/landing/home', pathMatch: 'full' },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
  { path: 'landing', loadChildren: './modules/landing/landing.module#LandingModule' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
