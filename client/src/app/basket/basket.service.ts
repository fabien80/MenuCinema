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

    private addFoodGroup(foodGroup: FoodGroup) {
        let added = false;
        let i = 0;
        while (!added && i < this.basket.foods.length) {
            if (this.basket.foods[i] === foodGroup) {
                this.basket.foods[i].amount += foodGroup.amount;
                added = true;
            }
            i++;
        }
        if (!added) {
            this.basket.foods.push(foodGroup);
        }
        this.basket.total += foodGroup.food.prix * foodGroup.amount;
    }

    public addFoodGroups(...foodGroups: FoodGroup[]) {
        foodGroups.forEach((foodGroup: FoodGroup) => {
            this.addFoodGroup(foodGroup);
        });
        console.log(this.basket);
    }


    private addMenuGroup(menuGroup: MenuGroup) {
        let added = false;
        let i = 0;
        while (!added && i < this.basket.menus.length) {
            if (this.basket.menus[i] === menuGroup) {
                this.basket.menus[i].amount += menuGroup.amount;
                added = true;
            }
            i++;
        }
        if (!added) {
            this.basket.menus.push(menuGroup);
        }

        this.basket.total += menuGroup.menu.total * menuGroup.amount;
    }

    public addMenuGroups(...menuGroups: MenuGroup[]) {
        menuGroups.forEach((menuGroup: MenuGroup) => {
            this.addMenuGroup(menuGroup);
        });
        console.log(this.basket);
    }
}
