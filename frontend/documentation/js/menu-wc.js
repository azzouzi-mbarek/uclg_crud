'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-28aeeb11ca2899037bf275b6982ad656"' : 'data-target="#xs-components-links-module-AdminModule-28aeeb11ca2899037bf275b6982ad656"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-28aeeb11ca2899037bf275b6982ad656"' :
                                            'id="xs-components-links-module-AdminModule-28aeeb11ca2899037bf275b6982ad656"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavLeftComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavLeftComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1ec151d7f3bf00ab115c1f3346fefa2c"' : 'data-target="#xs-components-links-module-AppModule-1ec151d7f3bf00ab115c1f3346fefa2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1ec151d7f3bf00ab115c1f3346fefa2c"' :
                                            'id="xs-components-links-module-AppModule-1ec151d7f3bf00ab115c1f3346fefa2c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-d2fd170ffe29b6e5f55beb9c14f17d8f"' : 'data-target="#xs-components-links-module-AuthModule-d2fd170ffe29b6e5f55beb9c14f17d8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-d2fd170ffe29b6e5f55beb9c14f17d8f"' :
                                            'id="xs-components-links-module-AuthModule-d2fd170ffe29b6e5f55beb9c14f17d8f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RequestResetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RequestResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResponseResetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResponseResetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-981585f3884cea7df2009c67974beae8"' : 'data-target="#xs-injectables-links-module-CoreModule-981585f3884cea7df2009c67974beae8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-981585f3884cea7df2009c67974beae8"' :
                                        'id="xs-injectables-links-module-CoreModule-981585f3884cea7df2009c67974beae8"' }>
                                        <li class="link">
                                            <a href="injectables/AcademicLevelService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AcademicLevelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ErrorHandlerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ErrorHandlerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstitutionCategoryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InstitutionCategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstitutionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InstitutionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PersonService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PersonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link">GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionModule.html" data-type="entity-link">InstitutionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InstitutionModule-b4fe92ebadc7f16917129f34e7999683"' : 'data-target="#xs-components-links-module-InstitutionModule-b4fe92ebadc7f16917129f34e7999683"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstitutionModule-b4fe92ebadc7f16917129f34e7999683"' :
                                            'id="xs-components-links-module-InstitutionModule-b4fe92ebadc7f16917129f34e7999683"' }>
                                            <li class="link">
                                                <a href="components/InstitutionCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstitutionCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstitutionHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstitutionHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstitutionInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstitutionInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalFormInstitutionCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalFormInstitutionCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalFormInstitutionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalFormInstitutionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionRoutingModule.html" data-type="entity-link">InstitutionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingModule.html" data-type="entity-link">LandingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandingModule-652c81b68593aae2d64cb6fdc3353360"' : 'data-target="#xs-components-links-module-LandingModule-652c81b68593aae2d64cb6fdc3353360"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-652c81b68593aae2d64cb6fdc3353360"' :
                                            'id="xs-components-links-module-LandingModule-652c81b68593aae2d64cb6fdc3353360"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepositoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepositoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingRoutingModule.html" data-type="entity-link">LandingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PersonModule.html" data-type="entity-link">PersonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PersonModule-369609be0481dee7d2c01f0ef74429d6"' : 'data-target="#xs-components-links-module-PersonModule-369609be0481dee7d2c01f0ef74429d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PersonModule-369609be0481dee7d2c01f0ef74429d6"' :
                                            'id="xs-components-links-module-PersonModule-369609be0481dee7d2c01f0ef74429d6"' }>
                                            <li class="link">
                                                <a href="components/AcademicLevelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcademicLevelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalFormAcademicLevelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalFormAcademicLevelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalFormPersonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalFormPersonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonsCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonsCategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonRoutingModule.html" data-type="entity-link">PersonRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-e2e5927d9b198ac511317ad6d07b05f9"' : 'data-target="#xs-components-links-module-SharedModule-e2e5927d9b198ac511317ad6d07b05f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-e2e5927d9b198ac511317ad6d07b05f9"' :
                                            'id="xs-components-links-module-SharedModule-e2e5927d9b198ac511317ad6d07b05f9"' }>
                                            <li class="link">
                                                <a href="components/ConfirmModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ConfirmModalComponent.html" data-type="entity-link">ConfirmModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstitutionCategoryComponent.html" data-type="entity-link">InstitutionCategoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstitutionHomeComponent.html" data-type="entity-link">InstitutionHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InstitutionInfoComponent.html" data-type="entity-link">InstitutionInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapsComponent.html" data-type="entity-link">MapsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalFormInstitutionCategoryComponent.html" data-type="entity-link">ModalFormInstitutionCategoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModalFormInstitutionComponent.html" data-type="entity-link">ModalFormInstitutionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavBarComponent.html" data-type="entity-link">NavBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavBarTopComponent.html" data-type="entity-link">NavBarTopComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavLeftComponent.html" data-type="entity-link">NavLeftComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PersonHomeComponent.html" data-type="entity-link">PersonHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoryComponent.html" data-type="entity-link">RepositoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RequestResetComponent.html" data-type="entity-link">RequestResetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResponseResetComponent.html" data-type="entity-link">ResponseResetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupComponent.html" data-type="entity-link">SignupComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AcademicLevel.html" data-type="entity-link">AcademicLevel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link">CustomValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/Institution.html" data-type="entity-link">Institution</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstitutionCategory.html" data-type="entity-link">InstitutionCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Person.html" data-type="entity-link">Person</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AcademicLevelService.html" data-type="entity-link">AcademicLevelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorHandlerService.html" data-type="entity-link">ErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionCategoryService.html" data-type="entity-link">InstitutionCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionService.html" data-type="entity-link">InstitutionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonService.html" data-type="entity-link">PersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link">TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AfterLoginService.html" data-type="entity-link">AfterLoginService</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BeforeLoginService.html" data-type="entity-link">BeforeLoginService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});