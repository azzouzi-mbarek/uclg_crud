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
                                            'data-target="#components-links-module-AdminModule-de60a8447313d32d3e9cbc1c3bea5df8"' : 'data-target="#xs-components-links-module-AdminModule-de60a8447313d32d3e9cbc1c3bea5df8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-de60a8447313d32d3e9cbc1c3bea5df8"' :
                                            'id="xs-components-links-module-AdminModule-de60a8447313d32d3e9cbc1c3bea5df8"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
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
                                            'data-target="#components-links-module-AppModule-0e758d826f6a6f25158a25743a84f892"' : 'data-target="#xs-components-links-module-AppModule-0e758d826f6a6f25158a25743a84f892"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0e758d826f6a6f25158a25743a84f892"' :
                                            'id="xs-components-links-module-AppModule-0e758d826f6a6f25158a25743a84f892"' }>
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
                                            'data-target="#components-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' : 'data-target="#xs-components-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' :
                                            'id="xs-components-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' }>
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
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' : 'data-target="#xs-injectables-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' :
                                        'id="xs-injectables-links-module-AuthModule-7f8aad08e5329f4804cafdd84e4da64c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TokenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link">GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InstitutionModule.html" data-type="entity-link">InstitutionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InstitutionModule-e1ae7fe1fbf1886a142fcd3568e72614"' : 'data-target="#xs-components-links-module-InstitutionModule-e1ae7fe1fbf1886a142fcd3568e72614"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InstitutionModule-e1ae7fe1fbf1886a142fcd3568e72614"' :
                                            'id="xs-components-links-module-InstitutionModule-e1ae7fe1fbf1886a142fcd3568e72614"' }>
                                            <li class="link">
                                                <a href="components/InstitutionCategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstitutionCategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstitutionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InstitutionComponent</a>
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
                                            'data-target="#components-links-module-LandingModule-9caf370c8a58e486fc485333d9666c9d"' : 'data-target="#xs-components-links-module-LandingModule-9caf370c8a58e486fc485333d9666c9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingModule-9caf370c8a58e486fc485333d9666c9d"' :
                                            'id="xs-components-links-module-LandingModule-9caf370c8a58e486fc485333d9666c9d"' }>
                                            <li class="link">
                                                <a href="components/MapsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
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
                                            'data-target="#components-links-module-PersonModule-00ec78dbecafbb971c697ccb048a3f09"' : 'data-target="#xs-components-links-module-PersonModule-00ec78dbecafbb971c697ccb048a3f09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PersonModule-00ec78dbecafbb971c697ccb048a3f09"' :
                                            'id="xs-components-links-module-PersonModule-00ec78dbecafbb971c697ccb048a3f09"' }>
                                            <li class="link">
                                                <a href="components/PersonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonComponent</a>
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
                                            'data-target="#components-links-module-SharedModule-cc20842d54ed73b1a56be9cc69056f72"' : 'data-target="#xs-components-links-module-SharedModule-cc20842d54ed73b1a56be9cc69056f72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-cc20842d54ed73b1a56be9cc69056f72"' :
                                            'id="xs-components-links-module-SharedModule-cc20842d54ed73b1a56be9cc69056f72"' }>
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
                                <a href="components/HomeComponent-1.html" data-type="entity-link">HomeComponent</a>
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
                                <a href="classes/CustomValidators.html" data-type="entity-link">CustomValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/Institution.html" data-type="entity-link">Institution</a>
                            </li>
                            <li class="link">
                                <a href="classes/InstitutionCategory.html" data-type="entity-link">InstitutionCategory</a>
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
                                    <a href="injectables/ErrorHandlerService.html" data-type="entity-link">ErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorHandlerService-1.html" data-type="entity-link">ErrorHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionCategoryService.html" data-type="entity-link">InstitutionCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstitutionService.html" data-type="entity-link">InstitutionService</a>
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
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});