import {Component, OnInit} from '@angular/core';
import {ProductType} from '../enum/ProductType';

@Component({
    selector: 'app-selection-food',
    templateUrl: './selection-food.component.html',
    styleUrls: ['./selection-food.component.scss']
})
export class SelectionFoodComponent implements OnInit {
    private readonly ENTREE: ProductType = ProductType.Entree;
    private readonly PLAT: ProductType = ProductType.Plat;
    private readonly DESSERT: ProductType = ProductType.Dessert;
    private readonly BOISSON: ProductType = ProductType.Boisson;
    private readonly MENU: ProductType = ProductType.Menu;

    constructor() {
    }

    ngOnInit() {
    }

}
