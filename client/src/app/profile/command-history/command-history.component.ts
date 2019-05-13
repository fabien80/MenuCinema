import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {MovieResponse} from '../../tmdb-data/Movie';
import {CommandeInterface} from '../../interface/CommandeInterface';


@Component({
    selector: 'app-command-history',
    templateUrl: './command-history.component.html',
    styleUrls: ['./command-history.component.scss']
})
export class CommandHistoryComponent implements OnInit {

    private data: CommandeInterface[];

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.clientService.getClientHistory().then((data) => {
            this.data = data;
        });

    }


}
