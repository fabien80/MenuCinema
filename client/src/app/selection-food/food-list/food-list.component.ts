import {Component, Input, OnInit} from '@angular/core';
import {FoodType} from '../../enum/FoodType';
import {FoodInterface, SearchFoodQuery, SearchFoodResponse} from '../../interface/food';
import {FoodService} from '../../food.service';

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

    @Input() private foodType: FoodType;
    private gridsContent: FoodInterface[][];
    private searchFoodResponse: SearchFoodResponse;

    constructor(private foodService: FoodService) {
        this.gridsContent = [];
    }

    ngOnInit() {
        this.checkFoodType(this.foodType);
        const foodQuery: SearchFoodQuery = {
            foodType: this.foodType
        };
        this.foodService.searchFoodMock(foodQuery).then((searchFoodResponse: SearchFoodResponse) => {
            this.searchFoodResponse = searchFoodResponse;
            this.fillGridsContent();
            console.log(searchFoodResponse);
        });
    }

    private fillGridsContent() {
        this.gridsContent.push(this.searchFoodResponse.results.slice(0, this.searchFoodResponse.results.length / 2));
        this.gridsContent.push(this.searchFoodResponse.results.slice(this.searchFoodResponse.results.length / 2, this.searchFoodResponse.results.length));
    }

    private checkFoodType(foodType: FoodType) {
        if (foodType == null) {
            throw new Error('Food type needed');
        }
    }

}
