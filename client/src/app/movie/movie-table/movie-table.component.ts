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
    @Input() searchString;
    private selectedTab = 1;
    private sortName = false;
    private sortScore = false;

    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.searchMovie(this.searchString, this.selectedTab);
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
        if (this.selectedTab === maxPage || this.selectedTab === this.searchMovieResponse.total_pages) {
            this.selectedTab = 1;
        } else {
            this.selectedTab++;
        }

        this.searchMovie(this.searchString, this.selectedTab);

    }

    public lastTab() {
        if (this.searchMovieResponse.total_pages < maxPage) {
            this.selectedTab = this.searchMovieResponse.total_pages;
        } else {
            this.selectedTab = maxPage;
        }

        this.searchMovie(this.searchString, this.selectedTab);
    }

    public firstTab() {
        this.selectedTab = 1;
        this.searchMovie(this.searchString, this.selectedTab);
    }

    public beforeTab() {
        if (this.selectedTab !== 1) {
            this.selectedTab--;
        } else {
            this.selectedTab = this.searchMovieResponse.total_pages < maxPage ? this.searchMovieResponse.total_pages : maxPage;
        }
        this.searchMovie(this.searchString, this.selectedTab);
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
}
