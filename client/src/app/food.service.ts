import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FoodInterface, SearchFoodQuery, SearchFoodResponse} from './interface/food';
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
        const plat: FoodInterface = {
            description: 'test',
            id: 1,
            nom: 'pizza',
            prix: 6,
            type: FoodType.Plat
        };
        const dessert: FoodInterface = {
            description: 'test',
            id: 2,
            nom: 'glace',
            prix: 2.50,
            type: FoodType.Dessert
        };

        const entree: FoodInterface = {
            description: 'test',
            id: 3,
            nom: 'salade',
            prix: 3,
            type: FoodType.Entree
        };

        const boisson: FoodInterface = {
            description: 'test',
            id: 4,
            nom: 'coca',
            prix: 2,
            type: FoodType.Boisson
        };
        const results: FoodInterface[] = [];
        console.log(query.foodType);

        if (query.foodType == null) {
            results.push(entree);
            results.push(plat);
            results.push(boisson);
            results.push(dessert);
        } else {
            switch (query.foodType) {
                case FoodType.Entree:
                    for (let i = 0; i < 10; i++) {
                        results.push(entree);
                    }

                    break;
                case FoodType.Plat:
                    for (let i = 0; i < 10; i++) {
                        results.push(plat);
                    }
                    break;
                case FoodType.Dessert:
                    for (let i = 0; i < 10; i++) {
                        results.push(dessert);
                    }
                    break;
                case FoodType.Boisson:
                    for (let i = 0; i < 10; i++) {
                        results.push(boisson);
                    }
                    break;
            }
        }

        return new Promise<SearchFoodResponse>((resolve, reject) => {
            resolve({results});
        });

    }

}
