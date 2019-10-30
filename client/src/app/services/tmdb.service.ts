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

    async TopMovie(query: SearchMovieQuery): Promise<SearchMovieResponse> { // a finir
        const url = `${tmdbApi}/movie/popular`;
        const res = await this.get2<SearchMovieResponse>(url);
            // a finir
        return res.body; // a finir
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
