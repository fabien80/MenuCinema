import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FoodGroup, FoodInterface} from '../../interface/FoodInterface';
import {BasketService} from '../../basket/basket.service';
import {MenuInterface, MenuGroup} from '../../interface/BasketInterface';
import {TypeConverter} from '../../tools/typeConverter';

@Component({
    selector: 'app-add-food-to-cart',
    templateUrl: './add-product-to-basket.component.html',
    styleUrls: ['./add-product-to-basket.component.scss']
})
export class AddProductToBasketComponent implements OnInit {
    private amount = 1;
    private price = 0;

    constructor(public dialogRef: MatDialogRef<AddProductToBasketComponent>,
                @Inject(MAT_DIALOG_DATA) public data: FoodInterface | MenuInterface,
                private basketService: BasketService) {

    }

    ngOnInit() {
        this.calculatePrice();
    }

    private calculatePrice() {
        if (TypeConverter.isMenu(this.data)) {
            this.price = TypeConverter.toMenu(this.data).total * this.amount;
        } else {
            this.price = TypeConverter.toFood(this.data).prix * this.amount;
        }

        console.log(this.price);
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
        const group = this.getGroup();
        this.basketService.addGroups(group);
        this.dialogRef.close();
    }

    public close() {
        this.dialogRef.close()
    }

    private getGroup() {
        let group;
        if (TypeConverter.isMenu(this.data)) {
            group = TypeConverter.menuToMenuGroup(TypeConverter.toMenu(this.data), this.amount);
        } else {
            group = TypeConverter.foodToFoodGroup(TypeConverter.toFood(this.data), this.amount);
        }
        return group;
    }

    private isMenu() {
        return TypeConverter.isMenu(this.data);
    }

    getFoodName() {
        return TypeConverter.toFood(this.data).nom;
    }

    getFooddescription() {
        return TypeConverter.toFood(this.data).description;
    }

    getMenuFoods() {
        return TypeConverter.toMenu(this.data).foodGroups;
    }
}
