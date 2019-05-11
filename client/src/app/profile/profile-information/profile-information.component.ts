import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientInterface} from '../../interface/ClientInterface';
import {NgForm} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {from} from 'rxjs/internal/observable/from';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {MatDialog} from '@angular/material';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {AuthService} from '../../auth/auth.service';
import {environment} from "../../../environments/environment";


@Component({
    selector: 'app-profile-information',
    templateUrl: './profile-information.component.html',
    styleUrls: ['./profile-information.component.scss']
})

export class ProfileInformationComponent implements OnInit {

    @Input() myClient: ClientInterface;
    @Output() editMode: EventEmitter<void> = new EventEmitter<void>();
    private tmpClient: ClientInterface;
    private imgSrc;
    private edit = false;
    private firstConn: boolean;

    constructor(private apiService: ApiService,
                private dialog: MatDialog,
                private localStorageService: LocalStorageService,
                private router: Router,
                private clientService: ClientService,
                private authService: AuthService) {
        this.clientService.client.subscribe((client: ClientInterface) => {
            if (client != null) {
                this.myClient = client;
                console.log(client);
                this.imgSrc = this.getPhotoPath();
            } else {
                this.myClient = this.clientService.getEmptyClient();
            }
            this.firstConn = client == null;
            this.edit = this.firstConn;
        });

    }


    ngOnInit(): void {
        this.tmpClient = {...this.myClient};
        this.imgSrc = this.getPhotoPath();
    }

    goEdit() {
        this.editMode.emit();
    }

    getPhotoPath() {
        if (this.myClient.photo) {
            return `${environment.apiBaseUrl}${this.myClient.photo}?${(new Date()).getTime()}`
        }
        return `${environment.apiBaseUrl}photo/anonymous.png`

    }
}
