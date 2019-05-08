import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree, Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {LocalStorageService} from '../services/local-storage.service';
import * as firebase from 'firebase';
import {ClientService} from '../services/client.service';
import {ClientInterface} from '../interface/ClientInterface';
import {ClientService} from '../services/client.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService,
                private router: Router,
                private localStorageService: LocalStorageService,
                private clientService: ClientService) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(next, state);
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }

    private async checkLogin(url: string) {
        console.log(url);
        const firebaseUser: firebase.User = this.authService.firebaseUser;
        const client: ClientInterface = this.clientService.client.value;
        console.log(this.authService.isSignedIn());
        if (this.authService.isSignedIn()) {
            return true;
        }

        if (client == null && firebaseUser != null) {
            this.router.navigate(['/profile']);
            return false;
        }

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;


    }
}
