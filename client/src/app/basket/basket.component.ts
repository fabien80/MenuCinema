import {Component, OnInit} from '@angular/core';
import {BasketService} from './basket.service';
import {BasketInterface} from '../interface/BasketInterface';
import {FoodService} from '../product/food/food.service';
import {MenuService} from '../product/menu/menu.service';
import {Basket} from './Basket';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    private basket: Basket;

    constructor(private basketService: BasketService,
                private foodService: FoodService,
                private menuService: MenuService) {
        this.basketService.basket.subscribe((basket: Basket) => {
            this.basket = basket;
            console.log(basket);
        });
    }

    ngOnInit() {

    }

    amountChange() {
        this.basketService.setBasketValue(this.basket);
        this.basketService.basket.next(this.basket);

    }

    clearBasket() {
        this.basketService.clear();
    }

    removeFoodGroup(index: number) {
        this.basketService.removeFoodGroupByIndex(index);
    }

    removeMenuGroup(index: number) {
        this.basketService.removeMenuGroupByIndex(index);
    }
}
