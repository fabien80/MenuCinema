import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FoodGroupInterface, FoodInterface} from '../../interface/FoodInterface';
import {BasketService} from '../../basket/basket.service';
import {TypeConverter} from '../../tools/typeConverter';
import {MenuInterface} from '../../interface/MenuInterface';
import {Product} from '../../product/class/Product';
import {FoodService} from '../../product/food/food.service';
import {MenuClass} from '../../product/menu/menu';
import {MenuService} from '../../product/menu/menu.service';
import {ProductGroup} from '../../product/class/productGroup';
import {ProductGroupInterface} from '../../interface/ProductInterface';

@Component({
    selector: 'app-add-food-to-cart',
    templateUrl: './add-product-to-basket.component.html',
    styleUrls: ['./add-product-to-basket.component.scss']
})
export class AddProductToBasketComponent implements OnInit {
    private amount = 1;
    private price = 0;

    constructor(public dialogRef: MatDialogRef<AddProductToBasketComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Product,
                private basketService: BasketService,
                private foodService: FoodService,
                private menuService: MenuService) {

    }

    ngOnInit() {
        this.calculatePrice();
    }

    private calculatePrice() {
        this.price = this.data.prix * this.amount;
    }

    isMenu() {
        return this.data instanceof MenuClass;
    }

    close() {
        this.dialogRef.close();
    }

    onValid() {
        let productGroup: ProductGroupInterface<any>;
        productGroup = {product: this.data, amount: this.amount};
        this.dialogRef.close(productGroup);
    }
}
