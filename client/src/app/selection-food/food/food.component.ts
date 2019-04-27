import {Component, Input, OnInit} from '@angular/core';
import {FoodType} from '../../enum/FoodType';
import {FoodService} from '../../food.service';
import {FoodInterface, SearchFoodQuery, SearchFoodResponse} from '../../interface/food';
import {MatDialog} from '@angular/material';
import {AddFoodToCartComponent} from '../../dialogs/add-food-to-cart/add-food-to-cart.component';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    @Input() private food: FoodInterface;

    constructor(private foodService: FoodService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.checkFood(this.food);
    }

    private checkFood(foodType: FoodInterface) {
        if (foodType == null) {
            throw new Error('FoodInterface needed');
        }
    }

    private openDialog() {
        const dialogRef = this.dialog.open(AddFoodToCartComponent, {
            width: '250px',
            data: this.food
        });
    }
}
