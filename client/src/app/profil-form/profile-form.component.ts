import {Component, Input, OnInit} from '@angular/core';
import {ClientInterface} from '../interface/ClientInterface';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {from} from 'rxjs/internal/observable/from';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {MatDialog} from '@angular/material';
import {LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';
import {ClientService} from '../services/client.service';
import {AuthService} from '../auth/auth.service';


@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent implements OnInit {

    @Input() myClient: ClientInterface;
    tmpClient: ClientInterface;
    edit = false;
    displayTile = 0;
    formClass = '';
    firstConn: boolean;

    constructor(private apiService: ApiService,
                private dialog: MatDialog,
                private localStorageService: LocalStorageService,
                private router: Router,
                private clientService: ClientService,
                private authService: AuthService) {
        this.clientService.client.subscribe((client: ClientInterface) => {
            if (client != null) {
                this.myClient = client;
            } else {
                this.myClient = this.clientService.getEmptyClient();
            }
            this.firstConn = client == null;
            this.edit = this.firstConn;
        });

    }


    ngOnInit(): void {
        this.tmpClient = {...this.myClient};


    }

    onSubmit(myForm: NgForm) {
        if (myForm.form.valid) {
            this.edit = false;
            this.tileDisplayer(1);
            this.myClient = this.tmpClient;
            myForm.form.markAsPristine();
            this.myClient.token = this.authService.firebaseUser.uid;
            if (this.firstConn) {
                this.clientService.createNewUserInApi(this.myClient);
            } else {
                this.clientService.updateUserInApi(this.myClient);
            }
        } else {
            this.formClass = 'was-validated';
            this.tileDisplayer(2);
        }
    }

    tileDisplayer(tileId) {
        this.displayTile = tileId;
        setTimeout(a => {
            this.displayTile = 0;
        }, 4000);
    }

    onCancel() {
        this.tileDisplayer(3);
        this.tmpClient = {...this.myClient};
        this.edit = false;
    }
}
