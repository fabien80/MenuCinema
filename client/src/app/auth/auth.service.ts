import {Injectable} from '@angular/core';
import {FirebaseApp, FirebaseAuth} from '@angular/fire';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {ClientService} from '../services/client.service';
import {LocalStorageService} from '../services/local-storage.service';
import {firebase} from 'firebaseui-angular';
import {MatDialog} from '@angular/material';
import {GenericDialogComponent} from '../dialogs/generic-dialog/generic-dialog.component';
import {ClientInterface} from '../interface/ClientInterface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _firebaseUser: firebase.User;
    private _isLogged = false;

    constructor(private firebaseApp: FirebaseApp,
                private router: Router,
                private clientService: ClientService,
                private localStorageService: LocalStorageService,
                private dialog: MatDialog) {
        this._firebaseUser = this.localStorageService.getFirebaseUser();
        if (this._firebaseUser) {
            this.clientService.init(this._firebaseUser.uid)
            .then(() => {
                console.log('logged');
            })
            .catch(() => {
                this.signOut();
            });
        }
    }

    signOut() {
        this.localStorageService.removeFirebaseUser();
        this.localStorageService.removeApiClient();
        this._isLogged = false;
        this._firebaseUser = null;
        this.clientService.client.next(null);
        this.firebaseApp.auth().signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }

    signWithFirebase() {
        return this.localStorageService.getFirebaseUser() != null;
    }

    signWithApi() {
        return this.clientService.client.value.clientId !== 0;
    }

    isSignedIn() {
        this._isLogged = (
            this._firebaseUser != null &&
            this.clientService.client !== undefined &&
            this.clientService.client.value != null &&
            this.clientService.client.value.clientId !== 0
        );
        return this._isLogged;
    }

    public signInFailure() {
        this.router.navigate(['/']);
    }

    public signInSuccess() {
        this._firebaseUser = firebase.auth().currentUser;
        this.localStorageService.setFirebaseUser(this._firebaseUser);
        this.clientService.init(this._firebaseUser.uid)
        .then(() => {
                if (this.localStorageService.getApiClient() == null) {
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


    get firebaseUser() {
        return this._firebaseUser;
    }
}
