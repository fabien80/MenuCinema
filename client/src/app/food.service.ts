import {Injectable} from '@angular/core';
import {SearchMovieQuery, SearchMovieResponse} from './tmdb-data/searchMovie';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FoodInterface, SearchFoodQuery, SearchFoodResponse} from './interface/food';
import {promise} from 'selenium-webdriver';
import {FoodType} from './enum/FoodType';

const api = '/api';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(private http: HttpClient) {
    }

    public async searchFood(query: SearchFoodQuery): Promise<SearchFoodResponse> {
        const params = new HttpParams();
        params.append('page', query.page.toString());
        params.append('query', query.query);
        params.append('nbElem', query.nbElem.toString());
        const url = `${api}/search/movie`;
        return await this.http.get(url, {params}).toPromise();
    }

    public async searchFoodMock(query: SearchFoodQuery): Promise<SearchFoodResponse> {
        const food1: FoodInterface = {
            description: 'test',
            id: 1,
            nom: 'pizza',
            prix: 6,
            type: FoodType.Plat
        };
        const food2: FoodInterface = {
            description: 'test',
            id: 2,
            nom: 'taco',
            prix: 8,
            type: FoodType.Plat
        };
        const results: FoodInterface[] = [];

        if (query.page === 1) {
            for (let i = 0; i < 20; i++) {
                results.push(food1);
            }
            return new Promise<SearchFoodResponse>(resolve => {
                const searchFoodResponse: SearchFoodResponse = {
                    page: query.page,
                    results,
                    total_pages: 2,
                    total_results: 20
                };
                resolve(searchFoodResponse);
            });
        } else {
            for (let i = 0; i < 20; i++) {
                results.push(food2);
            }
            return new Promise<SearchFoodResponse>(resolve => {
                const searchFoodResponse: SearchFoodResponse = {
                    page: query.page,
                    results,
                    total_pages: 2,
                    total_results: 20
                };
                resolve(searchFoodResponse);
            });
        }

    }

}
