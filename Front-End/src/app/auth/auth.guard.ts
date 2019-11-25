import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate  {
    
    constructor( private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url = this.router.url;
        //console.log('Inicio do AuthGuard, e o parametro url inicial: ' + url);
        if(!url.includes('credenciado')){
            //console.log('Execao do AuthGuard, e o parametro url: ' +url)
            this.router.navigateByUrl('/credenciado');
            return false;
        }
        //console.log('Fim do AuthGuard, e o parametro url final: ' +url);
        return true;
    }
}