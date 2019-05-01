import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {BasketInterface} from '../interface/BasketInterface';
import {MenuClass} from '../product/menu/menu';
import {Food} from '../product/food/food';
import {ProductType} from '../enum/ProductType';
import {ProductGroup} from '../product/class/productGroup';
import {MenuService} from '../product/menu/menu.service';
import {FoodService} from '../product/food/food.service';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private readonly basketKey: string = environment.basketStorageKey;

    constructor() {
    }

    public getBasket(): BasketInterface {
        const basket: any = JSON.parse(localStorage.getItem(this.basketKey));
        if (basket !== null) {
            const food = new Food(2, 1, 'oui', 'oui', ProductType.Entree);
            const menu = new MenuClass(1, 1, [new ProductGroup(food, 1)]);
            return {
                menuGroups: [new ProductGroup(menu, 1)],
                total: 0,
                movies: [],
                foodGroups: []
            };
        } else {
            return {
                menuGroups: [],
                foodGroups: [],
                movies: [],
                total: 0
            };
        }
    }

    public setBasket(basket: BasketInterface) {
        localStorage.setItem(this.basketKey, JSON.stringify(basket));
    }
}
