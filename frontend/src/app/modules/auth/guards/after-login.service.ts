import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core';

@Injectable()
export class AfterLoginService implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.Token.loggedIn();
    }
    constructor(private Token: TokenService) { }

}
