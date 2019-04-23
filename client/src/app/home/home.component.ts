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
    private selectedTab = 1;


    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        this.searchMovie('a', this.selectedTab);
    }

    public onSearch(query: string) {
        this.searchString = query;
        if (this.searchType === SearchEnum.Movie) {
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

    public nextTab() {
        if (this.selectedTab === 1000 || this.selectedTab === this.searchMovieResponse.total_pages) {
            this.selectedTab = 1;
        } else {
            this.selectedTab++;
        }

        if (this.searchType === SearchEnum.Movie) {
            this.searchMovie(this.searchString, this.selectedTab);
        }

    }

    public lastTab() {
        if (this.searchMovieResponse.total_pages < 1000) {
            this.selectedTab = this.searchMovieResponse.total_pages;
        } else {
            this.selectedTab = 1000;
        }

        if (this.searchType === SearchEnum.Movie) {
            this.searchMovie(this.searchString, this.selectedTab);
        }
    }

    public firstTab() {
        this.selectedTab = 1;
        if (this.searchType === SearchEnum.Movie) {
            this.searchMovie(this.searchString, this.selectedTab);
        }
    }

    public beforeTab() {
        if (this.selectedTab !== 1) {
            this.selectedTab--;
        } else {
            this.selectedTab = this.searchMovieResponse.total_pages < 1000 ? this.searchMovieResponse.total_pages : 1000;
        }
        if (this.searchType === SearchEnum.Movie) {
            this.searchMovie(this.searchString, this.selectedTab);
        }
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
