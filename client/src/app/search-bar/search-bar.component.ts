import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import {NavBarService} from '../services/nav-bar.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    @Input() private searchValue = '';
    @Output() searchEvent: EventEmitter<string> = new EventEmitter();


// modifier : on ajoute le service navBar pour envoyer les variable au service
    constructor(private navBarService: NavBarService) {
            }

    ngOnInit() {
    }

    public onChange(target: any) {
        this.searchEvent.emit(target.value); // a supprimer ?
        this.navBarService.searchString = target.value; // modifier, envoie le contenu de la barre de rechercher dans le service
    }

}
