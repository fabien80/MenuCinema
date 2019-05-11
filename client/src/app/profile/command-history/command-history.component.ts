import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
    selector: 'app-command-history',
    templateUrl: './command-history.component.html',
    styleUrls: ['./command-history.component.scss']
})
export class CommandHistoryComponent implements OnInit {


    private clientService: ClientService;
    private data: Promise<any>;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    ngOnInit() {
        this.clientService.getClientHistory().then( data => {
            this.data = data;

        });
    }

}
