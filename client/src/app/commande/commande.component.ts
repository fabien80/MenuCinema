import {Component, Input, OnInit} from '@angular/core';
import {CommandeInterface} from '../interface/CommandeInterface';
import {TmdbService} from '../services/tmdb.service';
import {MovieResponse} from '../tmdb-data/Movie';

@Component({
    selector: 'app-commande',
    templateUrl: './commande.component.html',
    styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {


    @Input() private _order: CommandeInterface;

    private movies: MovieResponse[];
    private movie;


    constructor(private tmdbService: TmdbService) {
    }

    ngOnInit() {
        this.getAllMovies().then((movies: MovieResponse[]) => {
            this.movies = movies;
        });
        console.log('La commande !!');
        console.log(this.order);
        console.log('NESTED FOOOOOD');
        console.log(this.order.nestedProduct);
    }


    set order(value) {
        this._order = value;
    }

    get order() {
        return this._order;
    }

    async getAllMovies(): Promise<MovieResponse[]> {
        const movies: MovieResponse[] = [];
        for (const idFilm of this.order.idFilms) {
            movies.push(await this.getMovie(idFilm));
        }
        return movies;
    }

    async getMovie(movieId: string): Promise<MovieResponse> {
        const movie = await this.tmdbService.getMovie(parseInt(movieId, 10));
        return movie;
    }

}
