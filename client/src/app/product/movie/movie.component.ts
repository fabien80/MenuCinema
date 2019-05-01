import {Component, Input, OnInit} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {MovieResponse} from '../../tmdb-data/Movie';
import {MovieResult} from '../../tmdb-data/searchMovie';

@Component({
    selector: 'app-film',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    @Input() movie: MovieResponse;
    posterUrl: string;

    constructor(private tmdbService: TmdbService) {

    }

    async ngOnInit() {
        if (this.movie === undefined) {
            this.movie = await this.tmdbService.getMovie(550);
        }
        this.initPosterUrl();
    }

    public initPosterUrl(): void {
        this.posterUrl = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    }

    public openHomepage() {
        window.open(this.movie.homepage, '_blank');
    }
}
