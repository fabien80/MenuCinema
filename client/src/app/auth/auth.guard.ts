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
import {ClientInterface} from '../interface/ClientInterface';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService,
                private router: Router,
                private localStorageService: LocalStorageService) {

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
        const user: firebase.User = this.localStorageService.getUser();
        const userInfos: ClientInterface = this.localStorageService.getUserInfos();
        console.log(this.authService.isSignedIn());
        if (this.authService.isSignedIn()) {
            return true;
        }

        if (userInfos == null && user != null) {
            this.router.navigate(['/profile']);
            return false;
        }

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;


    }
}
