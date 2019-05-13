import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from '../../services/tmdb.service';
import {CreditsResponse, MovieResponse} from '../../tmdb-data/Movie';
import {BasketService} from '../../basket/basket.service';
import {Movie} from './Movie';
import {RecommandationService} from '../../recommandation/recommandation.service';
import {ProductType} from '../../enum/ProductType';
import {Product} from '../class/Product';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    movie: MovieResponse;
    idMovie: number;
    castNCrew: CreditsResponse;
    movieClass: Movie;

    constructor(private tmdbService: TmdbService,
                private route: ActivatedRoute,
                private basketService: BasketService,
                private recommandationService: RecommandationService) {
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
                this.movieClass = Movie.fromData(data);
            });
            this.tmdbService.getMovieCastAndCrew(this.idMovie).then((data) => {
                this.castNCrew = data;
            });
        });
    }

    addToCart() {
        this.basketService.addMovie(Movie.fromData(this.movie));
    }

    getBackDropPath() {
        return this.tmdbService.getBackDropPath(this.movie);
    }

    getPosterPath() {
        return this.tmdbService.getPosterPath(this.movie);
    }

    getGivenType() {
        return this.recommandationService.getGivenType(ProductType.Movie);
    }

    getSearchType() {
        return this.recommandationService.getSearchType(ProductType.Movie);
    }

}
