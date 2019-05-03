import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TmdbService} from '../../services/tmdb.service';
import {CreditsResponse, MovieResponse} from '../../tmdb-data/Movie';
import {BasketService} from '../../basket/basket.service';
import {Movie} from './Movie';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    movie: MovieResponse;
    idMovie: number;
    castNCrew: CreditsResponse;

    constructor(private tmdbService: TmdbService,
                private route: ActivatedRoute,
                private basketService: BasketService) {
        this.movie = {
            adult: false,
            genres: [],
            imdb_id: '',
            overview: '',
            poster_path: '',
            release_date: '',
            tagline: '',
            title: '',
            vote_average: 0,
            vote_count: 0
        };

        this.castNCrew = {crew: [], cast: []};

    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.idMovie = +params.get('id');
            this.tmdbService.getMovie(this.idMovie).then((data) => {
                this.movie = data;
            });
            this.tmdbService.getMovieCastAndCrew(this.idMovie).then((data) => {
                this.castNCrew = data;
            });
        });
    }

    addToCart() {
        this.basketService.addMovie(Movie.fromData(this.movie));
        console.log('On ajoute ' + this.movie.title + ' au panier');
    }
}
