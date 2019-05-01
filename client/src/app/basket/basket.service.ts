import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BasketInterface} from '../interface/BasketInterface';
import {ProductGroup} from '../product/class/productGroup';
import {Product} from '../product/class/Product';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private _basket = new BehaviorSubject<BasketInterface>({
        foodGroups: [],
        menuGroups: [],
        movies: [],
        total: 0
    });

    constructor() {
    }


    get basket(): BehaviorSubject<BasketInterface> {
        return this._basket;
    }

    getIndexOfFoodGroup(group: ProductGroup): number {
        return this._basket.value.foodGroups.reduce((groupIndex: number, foodGroup: ProductGroup, currentIndex: number) => {
            if (foodGroup.product.id === group.product.id) {
                groupIndex = currentIndex;
            }
            return groupIndex;
        }, -1);
    }

    getIndexOfMenuGroup(group: ProductGroup): number {
        console.log(group);
        return this._basket.value.menuGroups.reduce((groupIndex: number, menuGroup: ProductGroup, currentIndex: number) => {
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


    addFood(group: ProductGroup) {
        const index = this.getIndexOfFoodGroup(group);
        if (index !== -1) {
            this._basket.value.foodGroups[index].amount++;
        } else {
            this._basket.value.foodGroups.push(group);
        }
        this.updateTotalPrice();
    }

    addMovie(movie: Product) {
        const index = this.getIndexOfMovieProduct(movie);
        if (index === -1) {
            this._basket.value.movies.push(movie);
        }
        this.updateTotalPrice();

    }

    addMenu(menuGroup: ProductGroup) {
        const index = this.getIndexOfMenuGroup(menuGroup);
        console.log(index);
        if (index !== -1) {
            this._basket.value.menuGroups[index].amount++;
        } else {
            this._basket.value.menuGroups.push(menuGroup);
        }
        this.updateTotalPrice();

    }

    private calculateMoviesPrice() {
        return this._basket.value.movies.reduce((total: number, movie: Product) => {
            total += movie.prix;
            return total;
        }, 0);
    }

    private calculateFoodsPrice() {
        return this._basket.value.foodGroups.reduce((total: number, foodGroup: ProductGroup) => {
            total += foodGroup.getTotal();
            return total;
        }, 0);
    }

    private calculateMenusPrice() {
        return this._basket.value.menuGroups.reduce((total: number, menuGroup: ProductGroup) => {
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
    }

    removeFoodGroupByIndex(index: number) {
        this._basket.value.foodGroups.splice(index, 1);
        this.updateTotalPrice();
    }

    removeMenuGroupByIndex(index: number) {
        this._basket.value.menuGroups.splice(index, 1);
        this.updateTotalPrice();
    }
}
