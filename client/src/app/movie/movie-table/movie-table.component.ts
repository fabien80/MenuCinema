import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {SearchMovieQuery, SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {SearchEnum} from '../../enum/SearchEnum';
import {TmdbService} from '../../tmdb.service';

@Component({
    selector: 'app-movie-table',
    templateUrl: './movie-table.component.html',
    styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit, OnChanges {
    @Input() searchMovieResponse: SearchMovieResponse;
    @Input() searchString;
    private selectedTab = 1;


    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        this.searchMovie('a', 1);
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
        if (this.selectedTab === 1000 || this.selectedTab === this.searchMovieResponse.total_pages) {
            this.selectedTab = 1;
        } else {
            this.selectedTab++;
        }

        this.searchMovie(this.searchString, this.selectedTab);

    }

    public lastTab() {
        if (this.searchMovieResponse.total_pages < 1000) {
            this.selectedTab = this.searchMovieResponse.total_pages;
        } else {
            this.selectedTab = 1000;
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
            this.selectedTab = this.searchMovieResponse.total_pages < 1000 ? this.searchMovieResponse.total_pages : 1000;
        }
        this.searchMovie(this.searchString, this.selectedTab);
    }


}
