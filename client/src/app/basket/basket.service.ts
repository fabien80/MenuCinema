import {Injectable} from '@angular/core';
import {Basket, Menu, MenuGroup} from '../interface/basket';
import {FoodInterface, FoodGroup} from '../interface/food';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private basket: Basket;

    constructor() {
        this.basket = {
            foods: [],
            menus: [],
            total: 0
        };
    }

    private addFood(food: FoodInterface) {
        let added = false;
        let i = 0;
        while (!added && i < this.basket.foods.length) {
            if (this.basket.foods[i].food === food) {
                this.basket.foods[i].amount++;
                added = true;
            }
            i++;
        }
        if (!added) {
            this.basket.foods.push({
                food,
                amount: 1
            });
        }
        this.basket.total += food.prix;
    }

    public addFoods(...foods: FoodInterface[]) {
        foods.forEach((food: FoodInterface) => {
            this.addFood(food);
        });
        console.log(this.basket);
    }


    private addMenu(menu: Menu) {
        let added = false;
        let i = 0;
        while (!added && i < this.basket.menus.length) {
            if (this.basket.menus[i].menu === menu) {
                this.basket.menus[i].amount++;
                added = true;
            }
            i++;
        }
        if (!added) {
            this.basket.menus.push({
                menu,
                amount: 1
            });
        }

        this.basket.total += menu.total;
    }

    public addMenus(...menus: Menu[]) {
        menus.forEach((menu: Menu) => {
            this.addMenu(menu);
        });
        console.log(this.basket);
    }
}
