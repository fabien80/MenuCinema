import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {MatDialog} from '@angular/material';
import {LocalStorageService} from '../services/local-storage.service';
import {Router} from '@angular/router';
import {ClientService} from '../services/client.service';
import {AuthService} from '../auth/auth.service';
import {ClientInterface} from '../interface/ClientInterface';


@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent implements OnInit {

    @Input() myClient: ClientInterface;

    constructor(private apiService: ApiService,
                private dialog: MatDialog,
                private localStorageService: LocalStorageService,
                private router: Router,
                private clientService: ClientService,
                private authService: AuthService) {

    }


    ngOnInit(): void {
        this.myClient = {
            client_id: 123,
            nom: 'test',
            prenom: 'toto',
            mail: 'toto@test',
            photo: 'photo/path.png',
            tel: '01 02 03 04 05',
            fidelite: 12,
            numero_rue: 124,
            rue: 'place de la rep',
            ville: 'SMH',
            code_postal: '26200',
            token: '',
        };
    }

    onSubmit(myForm: NgForm) {
        console.log(myForm);
        console.log(this.myClient);
        this.myClient.token = this.authService.firebaseUser.uid;
        this.apiService.postClient(this.myClient).then(() => {
            console.log('ok');
            this.clientService.setClientValue(this.myClient);
            this.router.navigate(['/homepage']);
        }).catch((error: Error) => {
            console.log(error);
        });
    }
}