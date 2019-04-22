import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseError} from 'firebase';
import {FirebaseUISignInFailure, FirebaseUISignInSuccess} from 'firebaseui-angular';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public signInFailure() {
        this.router.navigate(['/']);
    }

    public signInSuccessWithAuthResult() {
        console.log('ici');
        this.router.navigate(['/homepage']);
    }

}
