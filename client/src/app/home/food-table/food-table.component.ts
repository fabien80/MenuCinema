import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FoodService} from '../../food.service';
import {FoodInterface, SearchFoodQuery, SearchFoodResponse} from '../../interface/food';
import {MovieResult, SearchMovieResponse} from '../../tmdb-data/searchMovie';

@Component({
    selector: 'app-food-table',
    templateUrl: './food-table.component.html',
    styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent implements OnInit, OnChanges {
    @Input() searchFoodResponse: SearchFoodResponse;

    @Input() private _searchString;
    private _selectedTab = 1;
    private sortName = false;
    private sortScore = false;

    constructor(private foodService: FoodService) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.searchFood();
    }

    public searchFood() {
        const query: SearchFoodQuery = {
            query: this._searchString,
            page: this._selectedTab,
            nbElems: 20
        };
        /* this.foodService.searchFood(query)
            .then((searchFoodResponse: SearchFoodResponse) => {
                this.searchFoodResponse = searchFoodResponse;
            }); */
        this.foodService.searchFoodMock(query).then((searchFoodResponse: SearchFoodResponse) => {
            this.searchFoodResponse = searchFoodResponse;
        });

    }


    get searchString() {
        return this._searchString;
    }

    set searchString(value) {
        this._searchString = value;
    }

    get selectedTab(): number {
        return this._selectedTab;
    }

    set selectedTab(value: number) {
        this._selectedTab = value;
    }

    sortWithName() {
        this.searchFoodResponse.results.sort((a: FoodInterface, b: FoodInterface) => {
            let res: number;
            if (this.sortName) {
                res = ('' + b.nom).localeCompare(a.nom);

            } else {
                res = ('' + a.nom).localeCompare(b.nom);
            }
            return res;

        });
        this.sortName = !this.sortName;
    }

    sortWithPrice() {
        this.searchFoodResponse.results.sort((a: FoodInterface, b: FoodInterface) => {
            let res: number;
            if (this.sortScore) {
                res = a.prix - b.prix;
            } else {
                res = b.prix - a.prix;
            }
            return res;

        });
        this.sortScore = !this.sortScore;
    }

    public nextTab() {
        if (this._selectedTab === this.searchFoodResponse.total_pages) {
            this._selectedTab = 1;
        } else {
            this._selectedTab++;
        }

        this.searchFood();

    }

    public lastTab() {
        this._selectedTab = this.searchFoodResponse.total_pages;
        this.searchFood();
    }

    public firstTab() {
        this._selectedTab = 1;
        this.searchFood();
    }

    public beforeTab() {
        if (this._selectedTab !== 1) {
            this._selectedTab--;
        } else {
            this._selectedTab = this.searchFoodResponse.total_pages;
        }
        this.searchFood();
    }


}
