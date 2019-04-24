import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieResult, SearchMovieQuery, SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {TmdbService} from '../../tmdb.service';

const maxPage = 1000;


@Component({
    selector: 'app-movie-table',
    templateUrl: './movie-table.component.html',
    styleUrls: ['./movie-table.component.scss']
})

export class MovieTableComponent implements OnInit, OnChanges {
    @Input() searchMovieResponse: SearchMovieResponse;
    @Input() private _searchString;
    private _selectedTab = 1;
    private sortName = false;
    private sortScore = false;

    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.searchMovie(this._searchString, this._selectedTab);
    }

    public searchMovie(query: string, page: number) {
        if (query !== '') {
            const searchMovie: SearchMovieQuery = {
                query,
                region: 'fr-FR',
                page
            };
            this.tmdbService.searchMovie(searchMovie).then((response: SearchMovieResponse) => {
                this.searchMovieResponse = response;
            });
        }

    }

    public nextTab() {
        if (this._selectedTab === maxPage || this._selectedTab === this.searchMovieResponse.total_pages) {
            this._selectedTab = 1;
        } else {
            this._selectedTab++;
        }

        this.searchMovie(this._searchString, this._selectedTab);

    }

    public lastTab() {
        if (this.searchMovieResponse.total_pages < maxPage) {
            this._selectedTab = this.searchMovieResponse.total_pages;
        } else {
            this._selectedTab = maxPage;
        }

        this.searchMovie(this._searchString, this._selectedTab);
    }

    public firstTab() {
        this._selectedTab = 1;
        this.searchMovie(this._searchString, this._selectedTab);
    }

    public beforeTab() {
        if (this._selectedTab !== 1) {
            this._selectedTab--;
        } else {
            this._selectedTab = this.searchMovieResponse.total_pages < maxPage ? this.searchMovieResponse.total_pages : maxPage;
        }
        this.searchMovie(this._searchString, this._selectedTab);
    }


    sortWithName() {
        this.searchMovieResponse.results.sort((a: MovieResult, b: MovieResult) => {
            let res: number;
            if (this.sortName) {
                res = ('' + b.title).localeCompare(a.title);

            } else {
                res = ('' + a.title).localeCompare(b.title);
            }
            return res;

        });
        this.sortName = !this.sortName;
    }

    sortWithScore() {
        this.searchMovieResponse.results.sort((a: MovieResult, b: MovieResult) => {
            let res: number;
            if (this.sortScore) {
                res = a.vote_average - b.vote_average;
            } else {
                res = b.vote_average - a.vote_average;
            }
            return res;

        });
        this.sortScore = !this.sortScore;
    }


    get searchString() {
        return this._searchString;
    }

    set searchString(value) {
        this._searchString = value;
    }


    get selectedTab(): number {
        return this._selectedTab;
    }

    set selectedTab(value: number) {
        this._selectedTab = value;
    }
}
