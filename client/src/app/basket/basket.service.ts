import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductGroup} from '../product/class/productGroup';
import {Product} from '../product/class/Product';
import {LocalStorageService} from '../services/local-storage.service';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';
import {MenuService} from '../product/menu/menu.service';
import {FoodService} from '../product/food/food.service';
import {Basket} from './Basket';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private _basket = new BehaviorSubject<Basket>({
        foodGroups: [],
        total: 0,
        menuGroups: [],
        movies: []
    });

    constructor(private localStorageService: LocalStorageService) {
        const basket = Basket.fromData(this.localStorageService.getBasket());
        this._basket.next(basket);
    }


    get basket(): BehaviorSubject<Basket> {
        return this._basket;
    }

    getIndexOfFoodGroup(group: FoodGroup): number {
        return this._basket.value.foodGroups.reduce((groupIndex: number, foodGroup: FoodGroup, currentIndex: number) => {
            if (foodGroup.product.id === group.product.id) {
                groupIndex = currentIndex;
            }
            return groupIndex;
        }, -1);
    }

    getIndexOfMenuGroup(group: MenuGroup): number {
        console.log(group);
        return this._basket.value.menuGroups.reduce((groupIndex: number, menuGroup: MenuGroup, currentIndex: number) => {
            console.log(menuGroup);
            console.log(group);
            if (menuGroup.product.id === group.product.id) {
                groupIndex = currentIndex;
            }
            return groupIndex;
        }, -1);
    }

    getIndexOfMovieProduct(product: Product): number {
        return this._basket.value.movies.reduce((groupIndex: number, prod: Product, currentIndex: number) => {
            if (prod.id === product.id) {
                groupIndex = currentIndex;
            }
            return groupIndex;
        }, -1);
    }


    addFood(foodGroup: FoodGroup) {
        const index = this.getIndexOfFoodGroup(foodGroup);
        if (index !== -1) {
            this._basket.value.foodGroups[index].amount += foodGroup.amount;
        } else {
            this._basket.value.foodGroups.push(foodGroup);
        }
        this.updateTotalPrice();
        this.setBasketToLocalStorage();
    }

    addMovie(movie: Product) {
        const index = this.getIndexOfMovieProduct(movie);
        if (index === -1) {
            this._basket.value.movies.push(movie);
        }
        this.updateTotalPrice();
        this.setBasketToLocalStorage();

    }

    addMenu(menuGroup: MenuGroup) {
        const index = this.getIndexOfMenuGroup(menuGroup);
        if (index !== -1) {
            this._basket.value.menuGroups[index].amount += menuGroup.amount;
        } else {
            this._basket.value.menuGroups.push(menuGroup);
        }
        this.updateTotalPrice();
        this.setBasketToLocalStorage();

    }

    private calculateMoviesPrice() {
        return this._basket.value.movies.reduce((total: number, movie: Product) => {
            total += movie.prix;
            return total;
        }, 0);
    }

    private calculateFoodsPrice() {
        return this._basket.value.foodGroups.reduce((total: number, foodGroup: FoodGroup) => {
            total += foodGroup.getTotal();
            return total;
        }, 0);
    }

    private calculateMenusPrice() {
        return this._basket.value.menuGroups.reduce((total: number, menuGroup: MenuGroup) => {
            total += menuGroup.getTotal();
            return total;
        }, 0);
    }

    public updateTotalPrice() {
        this._basket.value.total = this.calculateFoodsPrice() + this.calculateMenusPrice() + this.calculateMoviesPrice();
    }

    public clear() {
        this._basket.next({
            foodGroups: [],
            menuGroups: [],
            total: 0,
            movies: []
        });
        this.setBasketToLocalStorage();
    }

    removeFoodGroupByIndex(index: number) {
        this._basket.value.foodGroups.splice(index, 1);
        this.updateTotalPrice();
        this.setBasketToLocalStorage();
    }

    removeMenuGroupByIndex(index: number) {
        this._basket.value.menuGroups.splice(index, 1);
        this.updateTotalPrice();
        this.setBasketToLocalStorage();

    }

    setBasketToLocalStorage() {
        this.localStorageService.setBasket(this._basket.value);
    }

    setBasketValue(basket: Basket) {
        this._basket.next(basket);
        this.updateTotalPrice();
        this.setBasketToLocalStorage();

    }
}
