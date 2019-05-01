import {Component, OnInit} from '@angular/core';
import {BasketService} from './basket.service';
import {BasketInterface} from '../interface/BasketInterface';
import {FoodGroup} from '../interface/FoodInterface';
import {MenuGroup} from '../interface/MenuInterface';
import {FoodService} from '../product/food/food.service';
import {MenuService} from '../product/menu/menu.service';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    private basket: BasketInterface;

    constructor(private basketService: BasketService,
                private  foodService: FoodService,
                private menuService: MenuService) {
        this.basketService.basket.subscribe((basket: BasketInterface) => {
            this.basket = basket;
            console.log(basket);
        });
    }

    ngOnInit() {

    }

    amountChange() {
        this.basketService.basket.next(this.basket);
        this.basketService.updateTotalPrice();
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
