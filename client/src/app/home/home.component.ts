import {Component, OnInit} from '@angular/core';
import {SearchMovieQuery, SearchMovieResponse} from '../tmdb-data/searchMovie';
import {TmdbService} from '../tmdb.service';
import {SearchEnum} from '../enum/SearchEnum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private _searchMovieResponse: SearchMovieResponse;
    private _searchString: string;
    private searchType: SearchEnum;

    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        const searchMovie: SearchMovieQuery = {
            query: 'a',
            region: 'fr-FR'
        };
        this.tmdbService.searchMovie(searchMovie).then((response: SearchMovieResponse) => {
            this.searchMovieResponse = response;
        });
    }

    public onSearch(query: string) {
        this.searchString = query;
        const searchMovie: SearchMovieQuery = {
            query,
            region: 'fr-FR'
        };
        this.tmdbService.searchMovie(searchMovie).then((response: SearchMovieResponse) => {
            this.searchMovieResponse = response;
        });
    }

    public updateSearchType(event: any) {
        console.log(event);
        console.log(SearchEnum.Food);
        switch (event.target.textContent.toLowerCase()) {
            case 'food' :
                this.searchType = SearchEnum.Food;
                break;
            case 'movie':
                this.searchType = SearchEnum.Movie;
                break;
        }
    }

    public movieSelected() {
        return this.searchType === SearchEnum.Movie;
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
}
