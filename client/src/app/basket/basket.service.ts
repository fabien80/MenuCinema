import {Injectable} from '@angular/core';
import {Basket, Menu, MenuGroup} from '../interface/basket';
import {FoodInterface, FoodGroup} from '../interface/food';
import {hasProperties} from 'codelyzer/util/astQuery';


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

    public addGroups(...groups: (FoodGroup | MenuGroup)[]) {
        for (const group of groups) {
            this.addGroup(group);
        }
        console.log(this.basket);
    }

    public deacreaseGroupAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if ('menu' in group) {
            this.basket.menus[index].amount--;
        } else {
            this.basket.foods[index].amount--;
        }
    }

    public increaseGrougAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if ('menu' in group) {
            this.basket.menus[index].amount++;
        } else {
            this.basket.foods[index].amount++;
        }
    }

    private getGroupLength(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            return this.basket.menus.length;
        } else {
            return this.basket.foods.length;
        }
    }

    private addGroup(group: FoodGroup | MenuGroup) {
        let added = false;
        let i = 0;
        const length = this.getGroupLength(group);
        while (!added && i < length) {
            if (this.isAtIndex(group, i)) {
                this.increaseGroupAmount(group);
                added = true;
            }
            i++;
        }
        if (!added) {
            this.addNewGroup(group);
        }

        this.updateTotalBasketTotal(group);

    }

    private isAtIndex(group: FoodGroup | MenuGroup, index: number) {
        if ('menu' in group) {
            return this.basket.menus[index] === group;
        } else {
            return this.basket.foods[index] === group;
        }
    }

    private getIndexOfGroup(group: FoodGroup | MenuGroup) {
        let index;
        if ('menu' in group) {
            index = this.basket.menus.indexOf(group);
        } else {
            index = this.basket.foods.indexOf(group);
        }

        return index;
    }

    private increaseGroupAmount(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            const index = this.getIndexOfGroup(group);
            this.basket.menus[index].amount += group.amount;
        } else {
            const index = this.getIndexOfGroup(group);
            this.basket.foods[index].amount += group.amount;
        }
    }

    private addNewGroup(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            this.basket.menus.push(group);
        } else {
            this.basket.foods.push(group);
        }
    }

    private updateTotalBasketTotal(group: FoodGroup | MenuGroup) {
        let groupTotal = 0;
        if ('menu' in group) {
            groupTotal = group.menu.total * group.amount;
        } else {
            groupTotal = group.food.prix * group.amount;
        }

        this.basket.total += groupTotal;
    }
}
