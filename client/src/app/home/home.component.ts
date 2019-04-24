import {Component, OnInit} from '@angular/core';
import {SearchMovieQuery, SearchMovieResponse} from '../tmdb-data/searchMovie';
import {TmdbService} from '../tmdb.service';
import {SearchType} from '../enum/SearchType';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _searchMovieResponse: SearchMovieResponse;
    private _searchString: string;
    private searchType: SearchType;
    private selectedTab = 1;


    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        this.searchMovie('a', this.selectedTab);
    }

    public onSearch(query: string) {
        this.searchString = query;
        if (this.searchType === SearchType.Movie) {
            this.searchMovie(query, this.selectedTab);
        }

    }

    public searchMovie(query: string, page: number) {
        if (query !== '') {
            const searchMovie: SearchMovieQuery = {
                query,
                region: 'fr',
                page
            };
            this.tmdbService.searchMovie(searchMovie).then((response: SearchMovieResponse) => {
                this.searchMovieResponse = response;
            });
        }

    }

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

    public onSearchChange(value: string) {
        this._searchString = value;
    }


    get searchMovieResponse(): SearchMovieResponse {
        return this._searchMovieResponse;
    }

    set searchMovieResponse(value: SearchMovieResponse) {
        this._searchMovieResponse = value;
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
