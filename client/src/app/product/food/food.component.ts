import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {MatDialog} from '@angular/material';
import {AddProductToBasketComponent} from '../../dialogs/add-product-to-basket/add-product-to-basket.component';
import {Food} from './food';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    @Input() private food: Food;

    constructor(private foodService: ProductService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.checkFood(this.food);
    }

    private checkFood(food: Food) {
        if (food == null) {
            throw new Error('Food needed');
        }
    }

    private openDialog() {
        const dialogRef = this.dialog.open(AddProductToBasketComponent, {
            width: '250px',
            data: this.food
        });

    }
}
