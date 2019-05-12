import {Component, Input, OnInit} from '@angular/core';
import {MovieResponse} from "../../tmdb-data/Movie";
import {TmdbService} from "../../services/tmdb.service";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'app-recommended-movies',
    templateUrl: './recommended-movies.component.html',
    styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {
    @Input() movieIds: string[];
    private movies: MovieResponse[] = [];
    showNavigationArrows = true;
    showNavigationIndicators = true;

    constructor(private tmdbService: TmdbService,
                private config: NgbCarouselConfig,
                private router: Router,
                private dialog: MatDialog) {
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }

    async ngOnInit() {
        for (let movieId of this.movieIds) {
            this.movies.push(await this.tmdbService.getMovie(parseInt(movieId)));
        }
        console.log(this.movies);
        console.log('ici');
    }

    goToMoviePage(movie: MovieResponse) {
        this.dialog.closeAll();
        this.router.navigate([`/movie/${movie.id}`])
    }

    getMovieUrl(movie: MovieResponse) {
        return `/movie/${movie.id}`
    }
}
