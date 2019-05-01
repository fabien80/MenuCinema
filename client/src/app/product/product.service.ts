import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FoodInterface} from '../interface/FoodInterface';
import {ProductType} from '../enum/ProductType';
import {SearchProductQuery, SearchProductResponse} from '../interface/SearchInterface';
import {MenuInterface} from '../interface/MenuInterface';
import {ProductGroupInterface, ProductInterface} from '../interface/ProductInterface';
import {MenuClass} from './menu/menu';

const api = '/api';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    public async search(query: SearchProductQuery): Promise<SearchProductResponse> {
        const params = new HttpParams();
        params.append('page', query.page.toString());
        params.append('query', query.query);
        params.append('nbElem', query.nbElem.toString());
        const url = `${api}/search/movie`;
        return await this.http.get(url, {params}).toPromise();
    }

    public async searchMock(query: SearchProductQuery): Promise<SearchProductResponse> {
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
        const results: ProductInterface[] = [];
        console.log(query.type);

        const menu1: MenuInterface = {
            id: 1,
            foodGroups: [{product: entree, amount: 1}, {product: boisson, amount: 1}, {product: plat, amount: 1}],
            prix: 20
        };

        const menu2: MenuInterface = {

            id: 2,
            foodGroups: [{amount: 1, product: plat}, {amount: 1, product: dessert}],
            prix: 10
        };

        const menu3: MenuInterface = {
            id: 3,
            foodGroups: [{product: entree, amount: 1}, {product: boisson, amount: 1}, {product: plat, amount: 1}, {
                product: dessert,
                amount: 1
            }],
            prix: 25
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

        return new Promise<SearchProductResponse>((resolve, reject) => {
            resolve({results});
        });

    }

}