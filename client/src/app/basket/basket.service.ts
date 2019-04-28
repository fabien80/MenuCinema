import {Injectable} from '@angular/core';
import {Basket, Menu, MenuGroup} from '../interface/basket';
import {FoodInterface, FoodGroup} from '../interface/food';
import {hasProperties} from 'codelyzer/util/astQuery';
import {BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private _basket = new BehaviorSubject<Basket>({
        foodGroups: [],
        menuGroups: [],
        total: 0
    });

    constructor() {
    }


    get basket(): BehaviorSubject<Basket> {
        return this._basket;
    }

    public addGroups(...groups: (FoodGroup | MenuGroup)[]) {
        for (const group of groups) {
            this.addGroup(group);
        }
        this._basket.next(this._basket.value);
    }

    public deacreaseGroupAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if ('menu' in group) {
            if (this._basket.value.menuGroups[index].amount > 0) {
                this._basket.value.menuGroups[index].amount--;

            }
        } else {
            if (this._basket.value.foodGroups[index].amount > 0) {
                this._basket.value.foodGroups[index].amount--;
            }
        }
        this.basket.next(this.basket.value);
    }

    public increaseGrougAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if ('menu' in group) {
            this._basket.value.menuGroups[index].amount++;
        } else {
            this._basket.value.foodGroups[index].amount++;
        }
        this.basket.next(this.basket.value);
    }

    private getGroupLength(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            return this._basket.value.menuGroups.length;
        } else {
            return this._basket.value.foodGroups.length;
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
            return this._basket.value.menuGroups[index] === group;
        } else {
            return this._basket.value.foodGroups[index] === group;
        }
    }

    private getIndexOfGroup(group: FoodGroup | MenuGroup) {
        let index;
        if ('menu' in group) {
            index = this._basket.value.menuGroups.indexOf(group);
        } else {
            index = this._basket.value.foodGroups.indexOf(group);
        }

        return index;
    }

    private increaseGroupAmount(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            const index = this.getIndexOfGroup(group);
            this._basket.value.menuGroups[index].amount += group.amount;
            this._basket.value.total += this._basket.value.menuGroups[index].menu.total;
        } else {
            const index = this.getIndexOfGroup(group);
            this._basket.value.foodGroups[index].amount += group.amount;
            this._basket.value.total += this._basket.value.foodGroups[index].food.prix;
        }
        this.basket.next(this.basket.value);
    }

    private addNewGroup(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            this._basket.value.menuGroups.push(group);
        } else {
            this._basket.value.foodGroups.push(group);
        }
    }

    private updateTotalBasketTotal(group: FoodGroup | MenuGroup) {
        let groupTotal = 0;
        if ('menu' in group) {
            groupTotal = group.menu.total * group.amount;
        } else {
            groupTotal = group.food.prix * group.amount;
        }

        this._basket.value.total += groupTotal;
    }
}
