import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FoodInterface} from '../interface/FoodInterface';
import {ProductType} from '../enum/ProductType';
import {SearchProductQuery} from '../interface/SearchInterface';
import {MenuInterface} from '../interface/MenuInterface';
import {ProductInterface} from '../interface/ProductInterface';
import {ApiService} from "../services/api.service";

const api = '/api';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient,
                private apiService: ApiService) {
    }

    public search(query: SearchProductQuery): Promise<any> {

        return this.apiService.searchProduct(query);
    }

    public async searchMock(query: SearchProductQuery): Promise<any> {
        const plat: FoodInterface = {
            description: 'recommandation-div',
            id: 1,
            nom: 'pizza',
            prix: 6,
            type: ProductType.Plat
        };
        const dessert: FoodInterface = {
            description: 'recommandation-div',
            id: 2,
            nom: 'glace',
            prix: 2.50,
            type: ProductType.Dessert
        };

        const entree: FoodInterface = {
            description: 'recommandation-div',
            id: 3,
            nom: 'salade',
            prix: 3,
            type: ProductType.Entree
        };

        const boisson: FoodInterface = {
            description: 'recommandation-div',
            id: 4,
            nom: 'coca',
            prix: 2,
            type: ProductType.Boisson
        };
        const results: ProductInterface[] = [];

        const menu1: MenuInterface = {
            id: 1,
            foodGroups: [{product: entree, amount: 1}, {product: boisson, amount: 1}, {product: plat, amount: 1}],
            prix: 20,
            nom: 'recommandation-div',
            type: ProductType.Menu
        };

        const menu2: MenuInterface = {

            id: 2,
            foodGroups: [{amount: 1, product: plat}, {amount: 1, product: dessert}],
            prix: 10,
            nom: 'recommandation-div',
            type: ProductType.Menu
        };

        const menu3: MenuInterface = {
            id: 3,
            foodGroups: [{product: entree, amount: 1}, {product: boisson, amount: 1}, {product: plat, amount: 1}, {
                product: dessert,
                amount: 1
            }],
            nom: 'recommandation-div',
            prix: 25,
            type: ProductType.Menu
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

        return new Promise<any>((resolve, reject) => {
            resolve({results});
        });

    }

}
