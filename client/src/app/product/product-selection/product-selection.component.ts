import {Component, OnInit} from '@angular/core';
import {ProductType} from '../../enum/ProductType';
import {SearchProductResponse} from '../../interface/FoodInterface';

@Component({
    selector: 'app-selection-food',
    templateUrl: './product-selection.component.html',
    styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent implements OnInit {
    private readonly ENTREE: ProductType = ProductType.Entree;
    private readonly PLAT: ProductType = ProductType.Plat;
    private readonly DESSERT: ProductType = ProductType.Dessert;
    private readonly BOISSON: ProductType = ProductType.Boisson;
    private readonly MENU: ProductType = ProductType.Menu;

    private menus: SearchProductResponse

    constructor() {
    }

    ngOnInit() {
    }

}
