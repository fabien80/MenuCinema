import {Component, OnInit} from '@angular/core';
import {SearchType} from '../enum/SearchType';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _searchString: string;

    constructor() {
        this._searchString = '';
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
