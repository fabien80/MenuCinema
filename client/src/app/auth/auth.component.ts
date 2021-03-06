import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseError} from 'firebase';
import {FirebaseUISignInFailure, FirebaseUISignInSuccess} from 'firebaseui-angular';
import {AuthService} from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    public signInFailure() {
        this.authService.signInSuccess();
    }

    public signInSuccess() {
        this.authService.signInSuccess();
    }

    goToProfil() {
        this.router.navigate(['/profile']);
    }

    goToHomepage() {
        this.router.navigate(['/homepage']);
    }
}
