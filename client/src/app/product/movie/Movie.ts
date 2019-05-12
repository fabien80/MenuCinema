import {Product} from '../class/Product';
import {MovieResult, SearchMovieResponse} from '../../tmdb-data/searchMovie';
import {MovieResponse} from "../../tmdb-data/Movie";

export class Movie extends Product implements MovieResult {
    public adult: boolean;
    public backdrop_path: string;
    public genre_ids: number[];
    public original_language: string;
    public original_title: string;
    public overview: string;
    public popularity: number;
    public poster_path: string;
    public release_date: string;
    public title: string;
    public video: boolean;
    public vote_average: number;
    public vote_count: number;

    public static fromData(movieResult: MovieResult) {
        const {adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count} = movieResult;
        return new this(id, 5, adult, backdrop_path, genre_ids, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count);

    }

    constructor(id: number, prix: number, adult: boolean, backdrop_path: string, genre_ids: number[], original_language: string, original_title: string, overview: string, popularity: number, poster_path: string, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number) {
        super(id, prix);
        this.adult = adult;
        this.backdrop_path = backdrop_path;
        this.genre_ids = genre_ids;
        this.original_language = original_language;
        this.original_title = original_title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}
