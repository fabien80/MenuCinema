import {Injectable} from '@angular/core';
import {Basket, Menu, MenuGroup} from '../interface/basket';
import {FoodInterface, FoodGroup} from '../interface/food';
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
            if (this._basket.value.menuGroups[index].amount > 1) {
                this._basket.value.menuGroups[index].amount--;
            } else {
                this.removeGroup(group);
            }
        } else {
            if (this._basket.value.foodGroups[index].amount > 1) {
                this._basket.value.foodGroups[index].amount--;
            } else {
                this.removeGroup(group);
            }
        }
        this.comptuteBasketTotal();
    }

    public increaseGrougAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if ('menu' in group) {
            this._basket.value.menuGroups[index].amount++;
        } else {
            this._basket.value.foodGroups[index].amount++;
        }
        this.comptuteBasketTotal();
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
            return this._basket.value.menuGroups[index].menu.id === group.menu.id;
        } else {
            return this._basket.value.foodGroups[index].food.id === group.food.id;
        }
    }

    private getIndexOfGroup(group: FoodGroup | MenuGroup) {
        let index;
        if ('menu' in group) {
            index = this._basket.value.menuGroups.reduce((acc: number, elm: MenuGroup, i: number) => {
                if (elm.menu.id === group.menu.id) {
                    acc = i;
                }
                return acc;
            }, -1);
        } else {
            index = this._basket.value.foodGroups.reduce((acc: number, elm: FoodGroup, i: number) => {
                if (elm.food.id === group.food.id) {
                    acc = i;
                }
                return acc;
            }, -1);
        }

        return index;
    }

    private increaseGroupAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if (index !== -1) {
            if ('menu' in group) {
                this._basket.value.menuGroups[index].amount += group.amount;
            } else {
                this._basket.value.foodGroups[index].amount += group.amount;
            }
        }

        this.comptuteBasketTotal();
    }

    private addNewGroup(group: FoodGroup | MenuGroup) {
        if ('menu' in group) {
            this._basket.value.menuGroups.push(group);
        } else {
            this._basket.value.foodGroups.push(group);
        }
    }

    private comptuteTotalOfFoodGroups(): number {
        return this._basket.value.foodGroups.reduce((acc: number, foodGroup: FoodGroup) => {
            acc += foodGroup.amount * foodGroup.food.prix;
            return acc;
        }, 0);
    }

    private comptuteTotalOfMenuGroups(): number {
        return this._basket.value.menuGroups.reduce((acc: number, menuGroup: MenuGroup) => {
            acc += menuGroup.amount * menuGroup.menu.total;
            return acc;
        }, 0);
    }

    private comptuteBasketTotal() {
        let total;
        total = this.comptuteTotalOfFoodGroups() + this.comptuteTotalOfMenuGroups();
        this._basket.value.total = total;
        this._basket.next(this._basket.value);
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

    private removeGroup(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if ('menu' in group) {
            this._basket.value.menuGroups.splice(index, 1);
        } else {
            this._basket.value.foodGroups.splice(index, 1);
        }
    }


}
