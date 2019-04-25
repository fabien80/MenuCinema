import {Component, OnInit} from '@angular/core';
import {SearchType} from '../enum/SearchType';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _searchString: string;
    private searchType: SearchType;


    constructor() {
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

    /**
     * Quand l'utilisateur clique sur un bouton movie ou food, change le searchType
     */
    public updateSearchType(event: any) {
        console.log(event);
        console.log(SearchType.Food);
        switch (event.target.textContent.toLowerCase()) {
            case 'food' :
                this.searchType = SearchType.Food;
                break;
            case 'movie':
                this.searchType = SearchType.Movie;
                break;
        }
    }

    public movieSelected() {
        return this.searchType === SearchType.Movie;
    }


    get searchString(): string {
        return this._searchString;
    }

    set searchString(value: string) {
        this._searchString = value;
    }

    foodSelected() {
        return this.searchType === SearchType.Food;
    }
}
