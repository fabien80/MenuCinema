import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BasketService} from '../../basket/basket.service';
import {Product} from '../../product/class/Product';
import {FoodService} from '../../product/food/food.service';
import {MenuClass} from '../../product/menu/menu';
import {MenuService} from '../../product/menu/menu.service';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {ApiService} from "../../services/api.service";
import {ProductType} from "../../enum/ProductType";
import {DBProductType} from "../../enum/DBProductType";
import {RecommandationService} from "../../recommandation/recommandation.service";

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
                private menuService: MenuService,
                private apiService: ApiService,
                private recommandationService: RecommandationService) {

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


    getSearchType() {
        return this.recommandationService.getSearchType(this.data.type);
    }

    getGivenType() {
        return this.recommandationService.getGivenType(this.data.type);

    }
}
