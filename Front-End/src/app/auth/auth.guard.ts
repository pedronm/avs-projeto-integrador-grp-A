import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanLoad  {
    
    constructor( private router: Router) {}

    canLoad(route: Route): boolean {
        let url = `/${route}`;
        console.log(url);
        return (url == '/credenciado');
    }
}