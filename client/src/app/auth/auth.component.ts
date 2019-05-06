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

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    public signInFailure() {
        this.authService.signInFailure();
    }

    public signInSuccess() {
        this.authService.signInSuccess();
    }

}
