import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FoodInterface} from '../../interface/food';
import {BasketService} from '../../basket/basket.service';

@Component({
    selector: 'app-add-food-to-cart',
    templateUrl: './add-food-to-basket.component.html',
    styleUrls: ['./add-food-to-basket.component.scss']
})
export class AddFoodToBasketComponent implements OnInit {
    private amount = 1;
    private price = 0;

    constructor(public dialogRef: MatDialogRef<AddFoodToBasketComponent>,
                @Inject(MAT_DIALOG_DATA) public data: FoodInterface,
                private basketService: BasketService) {

    }

    ngOnInit() {
        this.calculatePrice();
    }

    private calculatePrice() {
        this.price = this.data.prix * this.amount;
    }

    removeFood() {
        if (this.amount > 1) {
            this.amount--;
            this.calculatePrice();
        }
    }

    addFood() {
        this.amount++;
        this.calculatePrice();
    }

    addToBasket() {
        this.basketService.addFoods(this.data);
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}
