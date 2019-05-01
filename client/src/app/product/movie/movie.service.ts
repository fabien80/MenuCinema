import {Injectable} from '@angular/core';
import {TmdbService} from '../../tmdb.service';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private tmdb: TmdbService) {
    }


}
