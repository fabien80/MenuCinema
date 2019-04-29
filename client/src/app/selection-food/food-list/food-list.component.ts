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
    private readonly NB_ELEM_PER_ROW = 5;
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
        const nbLine = this.searchFoodResponse.results.length / this.NB_ELEM_PER_ROW;
        let start = 0;
        let end = this.NB_ELEM_PER_ROW;
        for (let i = 1; i < nbLine + 1; i++) {
            this.gridsContent.push(this.searchFoodResponse.results.slice(start, end));
            start = i * this.NB_ELEM_PER_ROW;
            end = start + this.NB_ELEM_PER_ROW;
            if (end > this.searchFoodResponse.results.length) {
                end = this.searchFoodResponse.results.length;
            }
        }
    }

    private checkFoodType(foodType: FoodType) {
        if (foodType == null) {
            throw new Error('Food type needed');
        }
    }

}
