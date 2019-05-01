import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from '../../../enum/ProductType';
import {MatDialog} from '@angular/material';
import {AddEventInterface} from '../../../interface/AddEventInterface';
import {Product} from '../../class/Product';
import {Food} from '../../food/food';
import {FoodInterface} from '../../../interface/FoodInterface';
import {ProductInterface} from '../../../interface/ProductInterface';
import {MenuClass} from '../../menu/menu';
import {MenuInterface} from '../../../interface/MenuInterface';
import {AddProductToBasketComponent} from '../../../dialogs/add-product-to-basket/add-product-to-basket.component';

@Component({
    selector: 'app-food-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    @Output() private addEvent: EventEmitter<AddEventInterface> = new EventEmitter();
    @Input() private type: ProductType;
    @Input() private products: Product[];

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
        console.log(this.products);
    }

    isMenu(product: Product) {
        return product instanceof MenuClass;
    }

    toFood(product) {
        return product as Food;
    }

    openDialog(product: Product) {
        const dialogReg = this.dialog.open(AddProductToBasketComponent, {
            width: '250',
            data: product
        });
    }

    toMenu(product: Product) {
        return product as MenuClass;
    }
}
