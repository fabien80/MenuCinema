import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {MenuClass} from '../product/menu/menu';
import {Food} from '../product/food/food';
import {ProductType} from '../enum/ProductType';
import {ProductGroup} from '../product/class/productGroup';
import {MenuService} from '../product/menu/menu.service';
import {FoodService} from '../product/food/food.service';
import {MenuGroup} from '../product/menu/MenuGroup';
import {FoodGroup} from '../product/food/foodGroup';
import {Basket} from '../basket/Basket';
import {BasketInterface} from '../interface/BasketInterface';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private readonly basketKey: string = environment.basketStorageKey;

    constructor(private menuService: MenuService,
                private foodService: FoodService) {
    }

    public getBasket(): Basket {
        const basket: Basket = JSON.parse(localStorage.getItem(this.basketKey));
        if (basket !== null) {
            return basket;
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
