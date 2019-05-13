import {Component, OnInit} from '@angular/core';
import {ClientInterface} from '../interface/ClientInterface';
import {ClientService} from '../services/client.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    private firstConn: boolean;
    private client: ClientInterface;
    private edit = false;

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.clientService.client.subscribe((client: ClientInterface) => {
            this.client = client;
            if (this.client == null) {
                this.firstConn = true;
                this.edit = true;
                this.client = this.clientService.getEmptyClient();
            }

        });
    }

    editDone(client: ClientInterface) {
        if (client != null) {
            this.clientService.setClientValue(client);
        }
        this.edit = false;

    }

    goEdit() {
        this.edit = true;
    }
}
