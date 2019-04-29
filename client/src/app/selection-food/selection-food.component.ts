import {Component, OnInit} from '@angular/core';
import {FoodType} from '../enum/FoodType';

@Component({
    selector: 'app-selection-food',
    templateUrl: './selection-food.component.html',
    styleUrls: ['./selection-food.component.scss']
})
export class SelectionFoodComponent implements OnInit {
    private readonly ENTREE: FoodType = FoodType.Entree;
    private readonly PLAT: FoodType = FoodType.Plat;
    private readonly DESSERT: FoodType = FoodType.Dessert;
    private readonly BOISSON: FoodType = FoodType.Boisson;
    private readonly MENU: FoodType = FoodType.Menu;

    constructor() {
    }

    ngOnInit() {
    }

}
