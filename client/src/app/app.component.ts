import {Component} from '@angular/core';
import {TmdbService} from './tmdb.service';
import {MovieResponse} from './tmdb-data/Movie';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

// Je suis passé par l'itération 0...
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    pFilm: MovieResponse;

    constructor(private tmdb: TmdbService, private angularFireAuth: AngularFireAuth) {
        this.init();
        angularFireAuth.authState.subscribe((value => {
            console.log(value);
        }));
    }

    async init() {
        this.tmdb.init(environment.tmdbKey);
        this.pFilm = await this.tmdb.getMovie(14);
    }

    get film(): MovieResponse {
        return this.pFilm;
    }

}
