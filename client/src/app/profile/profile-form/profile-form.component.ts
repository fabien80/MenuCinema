import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientInterface} from '../../interface/ClientInterface';
import {Form, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {ClientService} from '../../services/client.service';
import {Tile} from '../../enum/Tile';
import {HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
    @Input() tmpClient: ClientInterface;
    @Input() firstConn: boolean;
    @Output() editDone: EventEmitter<ClientInterface> = new EventEmitter();
    private photoChanged = false;
    formGroup: FormGroup;
    registerForm: FormGroup;


    constructor(private authService: AuthService,
                private clientService: ClientService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        if (this.tmpClient == undefined) {
            this.tmpClient = this.clientService.getEmptyClient();
        }

        this.formGroup = this.formBuilder.group({
            firstName: [
                this.tmpClient.prenom,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.\'-]+$')
                ])
            ],
            lastName: [
                this.tmpClient.nom,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.\'-]+$')
                ])
            ],
            mail: [
                this.tmpClient.mail,
                Validators.compose([
                    Validators.required,
                    Validators.email
                ])
            ],
            tel: [
                this.tmpClient.tel,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^(\\+33\\s?|0)[1-9]((\\s|\\.|-)?\\d\\d){4}$')
                ])
            ],
            postalCode: [
                this.tmpClient.codePostal,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$')
                ])
            ],
            streetNumber: [
                this.tmpClient.numeroRue,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^\\d{0,5}\\s?(bis|ter|Bis|Ter)?$')
                ])
            ],
            streetName: [
                this.tmpClient.rue,
                Validators.compose([
                    Validators.required
                ])
            ],
            city: [
                this.tmpClient.ville,
                Validators.compose([
                    Validators.required
                ])
            ],
            photo: ['']
        });

        this.formGroup.get('photo').setValue(null);


    }

    onCancel() {
        this.editDone.emit(null);
    }


    onSubmit() {
        if (this.formGroup.valid) {
            this.updateTmpClient();
            console.log(this.tmpClient);
            if (this.formGroup.get('photo').value != null) {
                this.uploadPhoto().then((data: HttpResponse<any>) => {
                    this.tmpClient.photo = data.headers.get("path");
                    this.clientSubmition();
                });
            } else {
                this.clientSubmition();
            }

        }
    }

    private clientSubmition() {
        this.tmpClient.token = this.authService.firebaseUser.uid;
        if (this.firstConn) {
            this.createNewUser();
        } else {
            this.updateUser();
        }
    }

    private updateTmpClient() {
        this.tmpClient.prenom = this.formGroup.get('firstName').value;
        this.tmpClient.nom = this.formGroup.get('lastName').value;
        this.tmpClient.mail = this.formGroup.get('mail').value;
        this.tmpClient.tel = this.formGroup.get('tel').value;
        this.tmpClient.numeroRue = this.formGroup.get('streetNumber').value;
        this.tmpClient.ville = this.formGroup.get('city').value;
        this.tmpClient.rue = this.formGroup.get('streetName').value;
        this.tmpClient.codePostal = this.formGroup.get('postalCode').value;
    }

    uploadPhoto() {
        return this.clientService.uploadFile(this.formGroup.get('photo').value);
    }


    private updateUser() {
        this.clientService.updateUserInApi(this.tmpClient)
            .then(() => {
                this.editDone.emit(this.tmpClient);
            }).catch((error: Error) => {
            this.editDone.emit(null);
        });
    }

    private createNewUser() {
        this.clientService.createNewUserInApi(this.tmpClient)
            .then(() => {
                this.editDone.emit(this.tmpClient);
            }).catch((error: Error) => {
            this.editDone.emit(null);
        });
    }

    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.formGroup.get('photo').setValue(file);
        }
    }
}
