import {Component, OnInit} from '@angular/core';
import {BasketService} from './basket.service';
import {Basket, MenuGroup} from '../interface/basket';
import {FoodGroup} from '../interface/food';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    private basket: Basket;

    constructor(private basketService: BasketService) {
        this.basketService.basket.subscribe((basket: Basket) => {
            this.basket = basket;
            console.log(basket);
        });
    }

    ngOnInit() {

    }

    descreaseAmount(foodGroup: FoodGroup | MenuGroup) {
        this.basketService.deacreaseGroupAmount(foodGroup);
    }

    increaseAmount(foodGroup: MenuGroup | FoodGroup) {
        console.log(foodGroup);
        this.basketService.increaseGrougAmount(foodGroup);
    }

    clearBasket() {
        this.basketService.clear();
    }

    removeGroup(group: FoodGroup | MenuGroup) {
        this.basketService.removeGroup(group);
    }
}
