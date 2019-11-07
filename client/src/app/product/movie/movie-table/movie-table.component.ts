import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MovieResult, SearchMovieQuery, SearchMovieResponse} from '../../../tmdb-data/searchMovie';
import {TmdbService} from '../../../services/tmdb.service';
import {forEach} from "@angular/router/src/utils/collection";

const maxPage = 1000;


@Component({
    selector: 'app-movie-table',
    templateUrl: './movie-table.component.html',
    styleUrls: ['./movie-table.component.scss']
})

export class MovieTableComponent implements OnInit, OnChanges {
    moviesFound: SearchMovieResponse;
    // création temporaire de cette variable pour les rank, utilisation a la place du movieFound
    @Input() private _searchString;
    @Input() private _searchRating;

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
        console.log('Detectection input');
        this._selectedTab = 1;
        this.searchMovie(this._searchString, this._selectedTab);
        this.sortName = false;
        this.sortScore = false;
        // précedemment placé dans le searchmovie, là ou "ici" est indiqué
       /* var i =0; // a finir
        for (let result of this.moviesFound.results) { // a finir
            if (result.vote_average <= this._searchRating) { // a finir
                console.log("supprimé", result.title, result.vote_average, this.searchRating);
                // response.results.splice(0,1); // il faut faire la suppression seulement après avoir bouclé
            }
            else {console.log("conservé", result.title, result.vote_average);} // a finir

        }*/
        // le for est un test pour afficher seulement les films avec etoile, on supprime de la liste les valeur inférieur aux filtres
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
               // ici test
                console.log(response);
                this.moviesFound = response;
            });
        } else {
            const searchMovie: SearchMovieQuery = { // a finir
                query,
                region: 'fr',
                page
            };
            this.tmdbService.TopMovie(searchMovie).then((response: SearchMovieResponse) => { // a finir
                this.moviesFound = response; // a finir
            });
           // this.moviesFound = this.emptyResult; ancienne version
        } // a finir
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

    get searchRating() {
        return this._searchRating;
    }

    set searchRating(value) {
        this._searchRating = value;
    }
}

