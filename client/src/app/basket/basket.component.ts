import {Component, OnInit} from '@angular/core';
import {BasketService} from './basket.service';
import {BasketInterface} from '../interface/BasketInterface';
import {FoodGroup} from '../interface/FoodInterface';
import {MenuGroup} from '../interface/MenuInterface';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    private basket: BasketInterface;

    constructor(private basketService: BasketService) {
        this.basketService.basket.subscribe((basket: BasketInterface) => {
            this.basket = basket;
            console.log(basket);
        });
    }

    ngOnInit() {

    }

}
