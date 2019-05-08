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

    @Input() myClient:ClientInterface;
    tmpClient:ClientInterface;
    edit: boolean = false;
    displayTile: number = 0;
    formClass: string= "";

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
            rue: "place de la rep",
            ville: "SMH",
            code_postal: 26200,
            token: ""
        };

        this.tmpClient = {...this.myClient};

    }

    onSubmit(f:NgForm){
        if(f.form.valid){
            this.edit = false;
            console.log("This has to be sent to the back :");
            this.tileDisplayer(1);
            this.myClient = this.tmpClient;
            console.log(this.myClient);
            f.form.markAsPristine();
        }else {
            this.formClass = "was-validated";
            this.tileDisplayer(2);
        }
    }
}

    onCancel() {
        this.edit = false;
        this.tileDisplayer(3);
    }

    tileDisplayer(tileId){
        this.displayTile = tileId;
        setTimeout(a=>{this.displayTile = 0},4000);
    }
}