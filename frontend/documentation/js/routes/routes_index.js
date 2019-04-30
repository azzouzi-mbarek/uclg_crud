var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/landing/home","pathMatch":"full"},{"path":"admin","loadChildren":"./modules/admin/admin.module#AdminModule","children":[{"kind":"module","children":[{"name":"adminRoutes","filename":"src/app/modules/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"","component":"AdminComponent","children":[{"path":"","loadChildren":"./person/person.module#PersonModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/admin/person/person-routing.module.ts","module":"PersonRoutingModule","children":[{"path":"persons","component":"PersonHomeComponent"},{"path":"person_categories","component":"PersonsCategoryComponent"}],"kind":"module"}],"module":"PersonModule"}]},{"path":"","loadChildren":"./institution/institution.module#InstitutionModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/admin/institution/institution-routing.module.ts","module":"InstitutionRoutingModule","children":[{"path":"institutions","component":"InstitutionHomeComponent"},{"path":"institution_categories","component":"InstitutionHomeComponent"}],"kind":"module"}],"module":"InstitutionModule"}]}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"landing","loadChildren":"./modules/landing/landing.module#LandingModule","children":[{"kind":"module","children":[{"name":"landingRoutes","filename":"src/app/modules/landing/landing-routing.module.ts","module":"LandingRoutingModule","children":[{"path":"","component":"LandingComponent","children":[{"path":"home","component":"HomeComponent"},{"path":"maps","component":"MapsComponent"},{"path":"repository","component":"RepositoryComponent"}]}],"kind":"module"}],"module":"LandingModule"}]},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"},{"name":"routes","filename":"src/app/modules/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"login","component":"LoginComponent"},{"path":"signup","component":"SignupComponent","canActivate":["BeforeLoginService"]},{"path":"request-password-reset","component":"RequestResetComponent"},{"path":"response-password-reset","component":"ResponseResetComponent"}],"kind":"module"}]}
