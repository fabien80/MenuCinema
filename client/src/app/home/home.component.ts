import {Component, Input, OnInit} from '@angular/core';
import {SearchType} from '../enum/SearchType';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @Input() private _searchString;
    @Input() private _searchRating;
    @Input() private comedie;
    @Input() private aventure;
    @Input() private action;
    @Input() private horreur;

    constructor() {
        this._searchString = '';
        console.log(this.comedie);
    }

    ngOnInit() {
    }

    /**
     * A chaque changement de recherche dans la bar de recherche, obtient la nouvelle string recherché
     * @param query : la nouvelle string recherché
     */
    public onSearch(query: string) {
        this.searchString = query;
    }


    get searchString(): string {
        return this._searchString;
    }

    set searchString(value: string) {
        this._searchString = value;
    }

}
