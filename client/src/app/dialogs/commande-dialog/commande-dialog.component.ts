import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatHorizontalStepper, MatStep} from '@angular/material';
import {Basket} from '../../basket/Basket';
import {BasketInterface} from '../../interface/BasketInterface';
import {ClientInterface} from '../../interface/ClientInterface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {AddressInterface} from '../../interface/AddressInterface';
import {StepState} from '@angular/cdk/stepper/typings/stepper';
import {ApiService} from '../../services/api.service';
import {GenericDialogComponent} from '../generic-dialog/generic-dialog.component';
import {BasketService} from '../../basket/basket.service';

@Component({
    selector: 'app-commande-dialog',
    templateUrl: './commande-dialog.component.html',
    styleUrls: ['./commande-dialog.component.scss']
})
export class CommandeDialogComponent implements OnInit {
    private client: ClientInterface;
    private addressGroup: FormGroup;
    private rueCtrl = 'rueCtrl';
    private numeroRueCtrl = 'numeroRueCtrl';
    private codePostalCtrl = 'codePostalCtrl';
    private villeCtrl = 'ville';
    private address: AddressInterface = {
        ville: '',
        codePostal: '',
        numeroRue: 1,
        rue: ''
    };
    private done = false;


    constructor(public dialogRef: MatDialogRef<CommandeDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public basket: Basket,
                private clientService: ClientService,
                private formBuilder: FormBuilder,
                private apiService: ApiService,
                private dialog: MatDialog,
                private basketService: BasketService) {

    }


    ngOnInit() {
        this.clientService.client.subscribe((client: ClientInterface) => {
            this.client = client;
            this.address.numeroRue = client.numeroRue;
            this.address.rue = client.rue;
            this.address.ville = client.ville;
            this.address.codePostal = client.codePostal;
            this.addressGroup = this.formBuilder.group({
                rueCtrl: [this.address.rue, Validators.required],
                numeroRueCtrl: [this.address.numeroRue, Validators.compose([Validators.required, Validators.pattern('^\\d{0,5}\\s?(bis|ter|Bis|Ter)?$')])],
                codePostalCtrl: [this.address.codePostal, Validators.compose([Validators.required, Validators.pattern('^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$')])],
                ville: [this.address.ville, Validators.required]

            });
        });

    }

    reset(stepper: MatHorizontalStepper) {
        stepper.reset();
        this.addressGroup = this.formBuilder.group({
            rueCtrl: [this.address.rue, Validators.required],
            numeroRueCtrl: [this.address.numeroRue, Validators.compose([Validators.required, Validators.pattern('^\\d{0,5}\\s?(bis|ter|Bis|Ter)?$')])],
            codePostalCtrl: [this.address.codePostal, Validators.compose([Validators.required, Validators.pattern('^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$')])],
            ville: [this.address.ville, Validators.required]

        });

    }

    close() {
        this.dialogRef.close();
    }

    pay() {
        this.done = true;
        this.getNewAdress();
        this.apiService.payement(this.basket, this.address, this.client.token)
        .then((res) => {
            this.dialog.open(GenericDialogComponent, {
                width: '250',
                data: 'Merci d\'avoir commandé ! '
            });
            this.basketService.clear();
            this.dialogRef.close();
        })
        .catch(reason => {
            console.log(reason);
            this.dialog.open(GenericDialogComponent, {
                width: '250',
                data: 'La commande n\' pas pu aboutir, merci de réessayer '
            });
        });


    }

    getNewAdress() {
        this.address.codePostal = this.addressGroup.get(this.codePostalCtrl).value;
        this.address.numeroRue = this.addressGroup.get(this.numeroRueCtrl).value;
        this.address.rue = this.addressGroup.get(this.rueCtrl).value;
        this.address.ville = this.addressGroup.get(this.villeCtrl).value;
    }
}
