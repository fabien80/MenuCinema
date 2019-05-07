import {Component, Input, OnInit} from '@angular/core';
import {ClientInterface} from '../interface/ClientInterface';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {from} from 'rxjs/internal/observable/from';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {MatDialog} from '@angular/material';
import {GenericDialogModule} from '../dialogs/generic-dialog/generic-dialog.module';


@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})

export class ProfileFormComponent implements OnInit {

    @Input() myClient: ClientInterface;

    constructor(private apiService: ApiService,
                private dialog: MatDialog) {

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
        console.log('This has to be sent to the back :');
        console.log(myForm);
        console.log(this.myClient);
        this.apiService.postClient(this.myClient).then(() => {
            console.log('ok');
        }).catch((error: Error) => {
            console.log(error);
        });
    }
}
