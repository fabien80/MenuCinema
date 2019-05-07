import {Injectable} from '@angular/core';
import {FirebaseApp, FirebaseAuth} from '@angular/fire';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {ClientService} from '../services/client.service';
import {LocalStorageService} from '../services/local-storage.service';
import {firebase} from 'firebaseui-angular';
import {MatDialog} from '@angular/material';
import {GenericDialogComponent} from '../dialogs/generic-dialog/generic-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user;
    private _isLogged = false;

    constructor(private firebaseApp: FirebaseApp,
                private router: Router,
                private clientService: ClientService,
                private localStorageService: LocalStorageService,
                private dialog: MatDialog) {
    }

    signOut() {
        this.localStorageService.removeUser();
        this.localStorageService.removeUserInfos();
        this._isLogged = false;
        this.firebaseApp.auth().signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

    signWithFirebase() {
        return this.localStorageService.getUser() != null;
    }

    isSignedIn() {
        this._isLogged = (this.localStorageService.getUser() != null && this.localStorageService.getUserInfos() !== null) || this._isLogged;
        return this._isLogged;
    }

    public signInFailure() {
        this.router.navigate(['/']);
    }

    public signInSuccess() {
        this._user = firebase.auth().currentUser;
        this.localStorageService.setUser(this._user);
        this.clientService.init(this._user.uid)
        .then(() => {
                if (this.localStorageService.getUserInfos() == null) {
                    this.router.navigate(['/profile']);
                } else {
                    this._isLogged = true;
                    this.router.navigate(['/homepage']);
                }

            }
        )
        .catch((error: Error) => {
            this.signOut();
            console.log(error);
            this.dialog.open(GenericDialogComponent, {
                width: '250',
                data: `Erreur de connexion au serveur back : \n ` + error.name,
                closeOnNavigation: false
            });
        });

    }

}
