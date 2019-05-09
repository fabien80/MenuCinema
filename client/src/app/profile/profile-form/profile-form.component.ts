import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientInterface} from '../../interface/ClientInterface';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {ClientService} from '../../services/client.service';
import {Tile} from '../../enum/Tile';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
    @Input() tmpClient: ClientInterface;
    @Input() firstConn: boolean;
    @Output() editDone: EventEmitter<ClientInterface> = new EventEmitter();
    formClass: string;
    displayTile: Tile;

    constructor(private authService: AuthService,
                private clientService: ClientService) {
    }

    ngOnInit() {
    }

    onCancel() {
        this.displayTile = Tile.NoChange;
        this.editDone.emit(null);
    }

    onSubmit(myForm: NgForm) {
        if (myForm.form.valid) {
            this.tileDisplayer(Tile.GoodChange);
            myForm.form.markAsPristine();
            this.tmpClient.token = this.authService.firebaseUser.uid;
            if (this.firstConn) {
                this.clientService.createNewUserInApi(this.tmpClient)
                .then(() => {
                    this.editDone.emit(this.tmpClient);
                }).catch((error: Error) => {
                    this.editDone.emit(null);
                });
            } else {
                this.clientService.updateUserInApi(this.tmpClient)
                .then(() => {
                    this.editDone.emit(this.tmpClient);
                }).catch((error: Error) => {
                    this.editDone.emit(null);
                });
            }
        } else {
            this.formClass = 'was-validated';
            this.tileDisplayer(Tile.WrongChange);
        }
    }

    tileDisplayer(tile: Tile) {
        this.displayTile = tile;
        setTimeout(a => {
            this.displayTile = Tile.Void;
        }, 1000);
    }

    goodChange() {
        return this.displayTile === Tile.GoodChange;


    }

    wrongChange() {
        return this.displayTile === Tile.WrongChange;

    }

    noChange() {
        return this.displayTile === Tile.NoChange;

    }
}
