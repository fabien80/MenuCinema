import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from '../../enum/ProductType';
import {FoodInterface, SearchQuery, SearchResponse} from '../../interface/food';
import {FoodService} from '../../food.service';
import {Menu} from '../../interface/basket';
import {TypeConverter} from '../../tools/typeConverter';
import {AddFoodToBasketComponent} from '../../dialogs/add-food-to-basket/add-food-to-basket.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

    @Input() private type: ProductType;
    private readonly NB_ELEM_PER_ROW = 5;
    private gridsContent: (FoodInterface | Menu)[][];
    private searchResponse: SearchResponse;

    constructor(private foodService: FoodService, public dialog: MatDialog) {
        this.gridsContent = [];
    }

    ngOnInit() {
        this.checkType(this.type);
        const query: SearchQuery = {
            type: this.type
        };

        this.foodService.searchMock(query).then((searchFoodResponse: SearchResponse) => {
            this.searchResponse = searchFoodResponse;
            this.fillGridsContent();
            console.log(searchFoodResponse);
        });
    }

    private fillGridsContent() {
        const nbLine = this.searchResponse.results.length / this.NB_ELEM_PER_ROW;
        let start = 0;
        let end = this.NB_ELEM_PER_ROW;
        for (let i = 1; i < nbLine + 1; i++) {
            this.gridsContent.push(this.searchResponse.results.slice(start, end));
            start = i * this.NB_ELEM_PER_ROW;
            end = start + this.NB_ELEM_PER_ROW;
            if (end > this.searchResponse.results.length) {
                end = this.searchResponse.results.length;
            }
        }
    }

    private checkType(foodType: ProductType) {
        if (foodType == null) {
            throw new Error('Food type needed');
        }
    }

    toFood(content: FoodInterface | Menu) {
        return TypeConverter.toFood(content);
    }

    isMenu() {
        return this.type === ProductType.Menu;
    }

    toMenu(content: FoodInterface | Menu) {
        return TypeConverter.toMenu(content);
    }

    private openDialog(data: any) {
        const dialogRef = this.dialog.open(AddFoodToBasketComponent, {
            width: '250px',
            data
        });

    }
}
