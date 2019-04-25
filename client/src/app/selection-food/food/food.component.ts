import {Component, Input, OnInit} from '@angular/core';
import {FoodType} from '../../enum/FoodType';
import {FoodService} from '../../food.service';
import {FoodInterface, SearchFoodQuery, SearchFoodResponse} from '../../interface/food';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
    @Input() private food: FoodInterface;

    constructor(private foodService: FoodService) {
    }

    ngOnInit() {
        this.checkFood(this.food);
    }

    private checkFood(foodType: FoodInterface) {
        if (foodType == null) {
            throw new Error('FoodInterface needed');
        }
    }
}
