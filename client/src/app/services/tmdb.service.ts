import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {PersonQuery, PersonResponse} from '../tmdb-data/Person';
import {SearchMovieQuery, SearchMovieResponse} from '../tmdb-data/searchMovie';
import {SearchPeopleQuery, SearchPeopleResponse} from '../tmdb-data/SearchPeople';
import {TVQuery, TVResponse} from '../tmdb-data/TV';
import {SearchTVQuery, SearchTVResponse} from '../tmdb-data/SearchTV';
import {CreditsResponse, MovieQuery, MovieResponse} from '../tmdb-data/Movie';
import {environment} from '../../environments/environment';

const tmdbApi = 'https://api.themoviedb.org/3';
const API_URL = environment.tmdbBaseUrl;
const API_KEY = environment.tmdbKey;
type HTTP_METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT';

function AlxToObjectString(data?: object): { [key: string]: string } {
    const res = {};
    for (const k of Object.keys(data || {})) {
        const v = data[k];
        res[k] = typeof v === 'string' ? v : JSON.stringify(v);
    }
    return res;
}

@Injectable({
    providedIn: 'root'
})
export class TmdbService {
    private apiKey: string;

    private async get<T>(url: string, data: object): Promise<HttpResponse<T>> {
        return this.http.get<T>(url, {
            observe: 'response',
            params: {...AlxToObjectString(data), api_key: this.apiKey}
        }).toPromise();
    }


    private async get2<T>(url: string): Promise<HttpResponse<T>> { // a finir
        return this.http.get<T>(url, {
            observe: 'response',
            params: {api_key: this.apiKey} // a finir
        }).toPromise(); // a finir
    }

    constructor(private http: HttpClient) {
    }

    init(key: string): this {
        this.apiKey = key;
        return this;
    }

    // _______________________________________________________________________________________________________________________________________
    // Movies
    // ________________________________________________________________________________________________________________________________
    // _______________________________________________________________________________________________________________________________________
    async getMovie(id: number, options?: MovieQuery): Promise<MovieResponse> {
        const url = `${tmdbApi}/movie/${id}`;
        const res = await this.get<MovieResponse>(url, options);
        return res.body;
    }


    async getMovieCastAndCrew(id: number, options?: MovieQuery): Promise<CreditsResponse> {
        const url = `${tmdbApi}/movie/${id}/credits`;
        const res = await this.get<MovieResponse>(url, options);
        return res.body;
    }

    async searchMovie(query: SearchMovieQuery): Promise<SearchMovieResponse> {
        const url = `${tmdbApi}/search/movie`;
        const res = await this.get<SearchMovieResponse>(url, query);
        return res.body;
    }
// on a créer le TopMovie à partir du searchmovie, sûrement à refaire au propre......
    async TopMovie(query: SearchMovieQuery, note : number = 0, action : boolean = false, comedie : boolean = false, aventure : boolean = false, horreur : boolean = false): Promise<SearchMovieResponse> { // a finir
        //si il n'y a pas de filtre, on affiche le top movie
        if (note === 0 && !action && !comedie && !aventure && !horreur) {
            const url = `${tmdbApi}/movie/popular`;
            const res = await this.get2<SearchMovieResponse>(url);
            // a finir
            return res.body;

        }
        // sinon on vérifie les filtres et on construit l'url API
        else {
            var url = `${tmdbApi}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&vote_average.gte=${note}`;
            // a finir
            let tableau: String = '';
            if (comedie === true) tableau += '35';
            if (action === true && tableau.length > 0) tableau += ',28';
            if (action === true && tableau.length === 0) tableau += '28';
            if (aventure === true && tableau.length > 0) tableau += ',12';
            if (aventure === true && tableau.length === 0) tableau += '12';
            if (horreur === true && tableau.length > 0) tableau += ',27';
            if (horreur === true && tableau.length === 0) tableau += '27';

            url += `&with_genres=${tableau}`;
            const res = await this.get2<SearchMovieResponse>(url);
            return res.body;
        }
        // action 28   animated 16   documentary 99  drama 18  family 10751  fantasy 14  history 36   comedy 35
       //  war 10752  crime 80   music 10402  mystery 9648  adventure 12  romance 10749   sci fi 878
        // horror 27  TV movie 10770  thriller 53  western 37

        }

    // _______________________________________________________________________________________________________________________________________
    // Person / People
    // _______________________________________________________________________________________________________________________
    // _______________________________________________________________________________________________________________________________________
    async getPerson(id: number, options?: PersonQuery): Promise<PersonResponse> {
        const url = `${tmdbApi}/person/${id}`;
        const res = await this.get<PersonResponse>(url, options);
        return res.body;
    }

    async searchPerson(query: SearchPeopleQuery): Promise<SearchPeopleResponse> {
        const url = `${tmdbApi}/search/person`;
        const res = await this.get<SearchPeopleResponse>(url, query);
        return res.body;
    }

    // _______________________________________________________________________________________________________________________________________
    // TV
    // ____________________________________________________________________________________________________________________________________
    // _______________________________________________________________________________________________________________________________________
    async getTV(id: number, options?: TVQuery): Promise<TVResponse> {
        const url = `${tmdbApi}/tv/${id}`;
        const res = await this.get<TVResponse>(url, options);
        return res.body;
    }

    async searchTV(query: SearchTVQuery): Promise<SearchTVResponse> {
        const url = `${tmdbApi}/search/tv`;
        const res = await this.get<SearchTVResponse>(url, query);
        return res.body;
    }

    public getBackDropPath(movie: MovieResponse) {
        return `${environment.backdropPathBaseUrl}${movie.backdrop_path}`;
    }

    public getPosterPath(movie: MovieResponse) {
        return `${environment.posterPathBaseUrl}${movie.poster_path}`;
    }

}
