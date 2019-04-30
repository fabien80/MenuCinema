import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FoodInterface, SearchQuery, SearchResponse} from './interface/food';
import {ProductType} from './enum/ProductType';
import {Menu} from './interface/basket';

const api = '/api';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(private http: HttpClient) {
    }

    public async search(query: SearchQuery): Promise<SearchResponse> {
        const params = new HttpParams();
        params.append('page', query.page.toString());
        params.append('query', query.query);
        params.append('nbElem', query.nbElem.toString());
        const url = `${api}/search/movie`;
        return await this.http.get(url, {params}).toPromise();
    }

    public async searchMock(query: SearchQuery): Promise<SearchResponse> {
        const plat: FoodInterface = {
            description: 'test',
            id: 1,
            nom: 'pizza',
            prix: 6,
            type: ProductType.Plat
        };
        const dessert: FoodInterface = {
            description: 'test',
            id: 2,
            nom: 'glace',
            prix: 2.50,
            type: ProductType.Dessert
        };

        const entree: FoodInterface = {
            description: 'test',
            id: 3,
            nom: 'salade',
            prix: 3,
            type: ProductType.Entree
        };

        const boisson: FoodInterface = {
            description: 'test',
            id: 4,
            nom: 'coca',
            prix: 2,
            type: ProductType.Boisson
        };
        const results: (FoodInterface | Menu)[] = [];
        console.log(query.type);

        const menu1: Menu = {
            id: 1,
            foodGroups: [{food: entree, amount: 1}, {food: boisson, amount: 1}, {food: plat, amount: 1}],
            total: 20
        };

        const menu2: Menu = {
            id: 2,
            foodGroups: [{food: boisson, amount: 1}, {food: plat, amount: 1}],
            total: 10
        };

        const menu3: Menu = {
            id: 3,
            foodGroups: [{food: entree, amount: 1}, {food: boisson, amount: 1}, {food: plat, amount: 1}, {food: dessert, amount: 1}],
            total: 25
        };

        if (query.type == null) {
            results.push(entree);
            results.push(plat);
            results.push(boisson);
            results.push(dessert);
        } else {
            switch (query.type) {
                case ProductType.Entree:
                    for (let i = 0; i < 13; i++) {
                        results.push(entree);
                    }

                    break;
                case ProductType.Plat:
                    for (let i = 0; i < 13; i++) {
                        results.push(plat);
                    }
                    break;
                case ProductType.Dessert:
                    for (let i = 0; i < 13; i++) {
                        results.push(dessert);
                    }
                    break;
                case ProductType.Boisson:
                    for (let i = 0; i < 13; i++) {
                        results.push(boisson);
                    }
                    break;
                case ProductType.Menu :
                    results.push(menu1);
                    results.push(menu2);
                    results.push(menu3);
                    break;

            }
        }

        return new Promise<SearchResponse>((resolve, reject) => {
            resolve({results});
        });

    }

}
