import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieResult, SearchMovieQuery, SearchMovieResponse} from '../../../tmdb-data/searchMovie';
import {TmdbService} from '../../../services/tmdb.service';

const maxPage = 1000;


@Component({
    selector: 'app-movie-table',
    templateUrl: './movie-table.component.html',
    styleUrls: ['./movie-table.component.scss']
})

export class MovieTableComponent implements OnInit, OnChanges {
    moviesFound: SearchMovieResponse;
    @Input() private _searchString;
    private _selectedTab = 1;
    private sortName = false;
    private sortScore = false;
    emptyResult: SearchMovieResponse = {
        results: [],
        total_results: 0,
        total_pages: 0
    };

    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        this.moviesFound = this.emptyResult;
    }

    /**
     * A chaques changements des inputs, effectue une nouvelle recherche, se replace à la première page et remet à false les boolean de tri
     */
    ngOnChanges(changes: SimpleChanges) {
        this._selectedTab = 1;
        this.searchMovie(this._searchString, this._selectedTab);
        console.log('ngOnChange');
        this.sortName = false;
        this.sortScore = false;
    }


    /**
     * Recherche d'un film en fonction d'une query et d'une page
     * @param query : la phrase ou mot à rechercher
     * @param page : la page selectionné
     */
    public searchMovie(query: string, page: number) {
        if (query !== '') {
            const searchMovie: SearchMovieQuery = {
                query,
                region: 'fr',
                page
            };
            this.tmdbService.searchMovie(searchMovie).then((response: SearchMovieResponse) => {
                console.log('searchMovie promise');
                this.moviesFound = response;
                console.log(response);
            });
        } else {
            this.moviesFound = this.emptyResult;
        }
    }

    /**
     * Passe à l page suivant en restant entre maxPage ou total_page et 1 (avance de façon circulaire)
     */
    public nextTab() {
        if (this._selectedTab === maxPage || this._selectedTab === this.moviesFound.total_pages) {
            this._selectedTab = 1;
        } else {
            this._selectedTab++;
        }

        this.searchMovie(this._searchString, this._selectedTab);

    }

    /**
     * Se place à la denière page (page maxPage maximum)
     */
    public lastTab() {
        if (this.moviesFound.total_pages < maxPage) {
            this._selectedTab = this.moviesFound.total_pages;
        } else {
            this._selectedTab = maxPage;
        }

        this.searchMovie(this._searchString, this._selectedTab);
    }

    /**
     * Retourne à la première page (1)
     */
    public firstTab() {
        this._selectedTab = 1;
        this.searchMovie(this._searchString, this._selectedTab);
    }


    /**
     * Retourne à la page d'avant, (recule de façon circulaire)
     */
    public beforeTab() {
        if (this._selectedTab !== 1) {
            this._selectedTab--;
        } else {
            this._selectedTab = this.moviesFound.total_pages < maxPage ? this.moviesFound.total_pages : maxPage;
        }
        this.searchMovie(this._searchString, this._selectedTab);
    }


    /**
     * En fonction de sortName, tri de façon asc ou desc le nom
     */
    sortWithName() {
        this.moviesFound.results.sort((a: MovieResult, b: MovieResult) => {
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

    /**
     * En fonction de sortScore, tri de façon asc ou desc le score
     */
    sortWithScore() {
        this.moviesFound.results.sort((a: MovieResult, b: MovieResult) => {
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
