import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { TokenService } from 'src/app/core';

@Injectable()
export class BeforeLoginService implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        return !this.token.loggedIn();   // true or false
    }
    constructor(
        private token: TokenService,
        private router: Router
    ) { }

}
