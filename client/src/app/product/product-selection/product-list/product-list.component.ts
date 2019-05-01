import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from '../../../enum/ProductType';
import {FoodInterface, SearchQuery, SearchProductResponse} from '../../../interface/FoodInterface';
import {ProductService} from '../../product.service';
import {MenuInterface} from '../../../interface/BasketInterface';
import {TypeConverter} from '../../../tools/typeConverter';
import {AddProductToBasketComponent} from '../../../dialogs/add-product-to-basket/add-product-to-basket.component';
import {MatDialog} from '@angular/material';
import {AddEventInterface} from '../../../interface/AddEventInterface';

@Component({
    selector: 'app-food-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    @Output() private addEvent: EventEmitter<AddEventInterface> = new EventEmitter();
    @Input() private type: ProductType;
    private readonly NB_ELEM_PER_ROW = 5;
    private gridsContent: (FoodInterface | MenuInterface)[][];
    private searchResponse: SearchProductResponse;

    constructor(private foodService: ProductService, public dialog: MatDialog) {
        this.gridsContent = [];
    }

    ngOnInit() {
        this.checkType(this.type);
        const query: SearchQuery = {
            type: this.type
        };

        this.foodService.searchMock(query).then((searchFoodResponse: SearchProductResponse) => {
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

    toFood(content: FoodInterface | MenuInterface) {
        return TypeConverter.toFood(content);
    }

    isMenu() {
        return this.type === ProductType.Menu;
    }

    toMenu(content: FoodInterface | MenuInterface) {
        return TypeConverter.toMenu(content);
    }

    private openDialog(data: any) {
        const dialogRef = this.dialog.open(AddProductToBasketComponent, {
            width: '250px',
            data
        });

        dialogRef.afterClosed().toPromise().then(value => {

        });

    }
}
