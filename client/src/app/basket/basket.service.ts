import {Injectable} from '@angular/core';
import {BasketInterface, MenuInterface, MenuGroup} from '../interface/BasketInterface';
import {FoodInterface, FoodGroup} from '../interface/FoodInterface';
import {BehaviorSubject} from 'rxjs';
import {TypeConverter} from '../tools/typeConverter';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private _basket = new BehaviorSubject<BasketInterface>({
        foodGroups: [],
        menuGroups: [],
        total: 0
    });

    constructor() {
    }

    get basket(): BehaviorSubject<BasketInterface> {
        return this._basket;
    }

    /**
     * Ajoute le group passer en argument au panier
     * @param groups: Un tableau ou un nombre inderterminé de Foood / MenuGroup
     */
    public addGroups(...groups: (FoodGroup | MenuGroup)[]) {
        for (const group of groups) {
            this.addGroup(group);
        }
        this._basket.next(this._basket.value);
    }

    /**
     * En récupérant l'index du group, baisse l'amount du group dans le panier si il est présent.
     * @param group: Un group (FoodGroup ou MenuGroup)
     */
    public deacreaseGroupAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if (TypeConverter.isMenuGroup(group)) {
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
        this.computeBasketTotal();
    }

    /**
     * Augmente l'amount du group dans le panier si il est présent
     * @param group: Un groupe
     */
    public increaseGrougAmount(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if (TypeConverter.isMenuGroup(group)) {
            this._basket.value.menuGroups[index].amount++;
        } else {
            this._basket.value.foodGroups[index].amount++;
        }
        this.computeBasketTotal();
    }

    /**
     * Permet d'obtenir la taille de menuGroups ou FoodGroups en fonction du group passé en argument
     * @param group: Un groupe
     */
    private getGroupLength(group: FoodGroup | MenuGroup) {
        if (TypeConverter.isMenuGroup(group)) {
            return this._basket.value.menuGroups.length;
        } else {
            return this._basket.value.foodGroups.length;
        }
    }

    /**
     * Ajoute un groupe group au panier
     * Tout d'abord vérifie si il existe déjà un groupe similaire, si c'est le cas augmente l'amount
     * Sinon ajoute le groupe au panier
     * @param group: Un groupe
     */
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

        this.updateBasketTotal(group);

    }

    /**
     * Vérifie si le groupe group est bien à l'index index
     * @param group: Un groupe
     * @param index: Un index
     */
    private isAtIndex(group: FoodGroup | MenuGroup, index: number) {
        if (TypeConverter.isMenuGroup(group)) {
            return this._basket.value.menuGroups[index].menu.id === TypeConverter.toMenuGroup(group).menu.id;
        } else {
            return this._basket.value.foodGroups[index].food.id === TypeConverter.toFoodGroup(group).food.id;
        }
    }


    /**
     * En fonction d'un groupe, récupére son index
     * @param group: Un group
     */
    private getIndexOfGroup(group: FoodGroup | MenuGroup) {
        let index;
        if (TypeConverter.isMenuGroup(group)) {
            index = this._basket.value.menuGroups.reduce((acc: number, elm: MenuGroup, i: number) => {
                if (elm.menu.id === TypeConverter.toMenuGroup(group).menu.id) {
                    acc = i;
                }
                return acc;
            }, -1);
        } else {
            index = this._basket.value.foodGroups.reduce((acc: number, elm: FoodGroup, i: number) => {
                if (elm.food.id === TypeConverter.toFoodGroup(group).food.id) {
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
            if (TypeConverter.isMenuGroup(group)) {
                this._basket.value.menuGroups[index].amount += group.amount;
            } else {
                this._basket.value.foodGroups[index].amount += group.amount;
            }
        }

        this.computeBasketTotal();
    }

    /**
     * Ajoute le groupe groupe au bon tableau dans le panier
     * @param group : Un groupe
     */
    private addNewGroup(group: FoodGroup | MenuGroup) {
        if (TypeConverter.isMenuGroup(group)) {
            this._basket.value.menuGroups.push(TypeConverter.toMenuGroup(group));
        } else {
            this._basket.value.foodGroups.push(TypeConverter.toFoodGroup(group));
        }
    }

    /**
     * Calcul le total des plats dans le panier
     */
    private comptuteTotalOfFoodGroups(): number {
        return this._basket.value.foodGroups.reduce((acc: number, foodGroup: FoodGroup) => {
            acc += foodGroup.amount * foodGroup.food.prix;
            return acc;
        }, 0);
    }

    /**
     * Calcul le total des menus dans le panier
     */
    private comptuteTotalOfMenuGroups(): number {
        return this._basket.value.menuGroups.reduce((acc: number, menuGroup: MenuGroup) => {
            acc += menuGroup.amount * menuGroup.menu.total;
            return acc;
        }, 0);
    }

    /**
     * Calcul le total du panier et le met à jour
     */
    private computeBasketTotal() {
        let total;
        total = this.comptuteTotalOfFoodGroups() + this.comptuteTotalOfMenuGroups();
        this._basket.value.total = total;
        this._basket.next(this._basket.value);
    }

    /**
     * Ajoute le total du group donné au total du panier
     * @param group: un groupe
     */
    private updateBasketTotal(group: FoodGroup | MenuGroup) {
        let groupTotal = 0;
        if (TypeConverter.isMenuGroup(group)) {
            groupTotal = TypeConverter.toMenuGroup(group).menu.total * group.amount;
        } else {
            groupTotal = TypeConverter.toFoodGroup(group).food.prix * group.amount;
        }

        this._basket.value.total += groupTotal;
    }

    /**
     * Retire un groupe du panier en fonction du panier passé en argument
     * @param group: un groupe
     */
    public removeGroup(group: FoodGroup | MenuGroup) {
        const index = this.getIndexOfGroup(group);
        if (TypeConverter.isMenuGroup(group)) {
            this._basket.value.menuGroups.splice(index, 1);
        } else {
            this._basket.value.foodGroups.splice(index, 1);
        }
        this.computeBasketTotal();
    }


    public clear() {
        this._basket.next({
            menuGroups: [],
            foodGroups: [],
            total: 0
        });
    }
}
