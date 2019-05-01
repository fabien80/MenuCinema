import {Injectable} from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private tmdb: TmdbService) {
    }


}
