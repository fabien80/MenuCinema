import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {MovieResponse} from '../../tmdb-data/Movie';
import {CommandeInterface} from '../../interface/CommandeInterface';
import {TmdbService} from '../../services/tmdb.service';
import {MenuInterface} from '../../interface/MenuInterface';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {FoodInterface} from '../../interface/FoodInterface';
import {FoodGroup} from '../../product/food/foodGroup';
import {SearchMenuInterface} from "../../interface/SearchInterface";
import {MenuClass} from "../../product/menu/menu";
import {MenuGroup} from "../../product/menu/MenuGroup";


@Component({
    selector: 'app-command-history',
    templateUrl: './command-history.component.html',
    styleUrls: ['./command-history.component.scss']
})
export class CommandHistoryComponent implements OnInit {


    private clientService: ClientService;
    private data: CommandeInterface[];

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    ngOnInit() {
        this.clientService.getClientHistory().then(data => {
            this.data = data;
            console.log(data);
        });

    }


}
