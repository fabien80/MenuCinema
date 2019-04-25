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

    /**
     * A chaques changements des inputs, effectue une nouvelle recherche, se replace à la première page et remet à false les boolean de tri
     */
    ngOnChanges(changes: SimpleChanges): void {

        this._selectedTab = 1;
        this.searchFood();
        this.sortName = false;
        this.sortScore = false;
    }

    /**
     * Methode de recherche de nourriture, en fonction de search string va envoyer une requete au back
     */
    public searchFood() {
        console.log('foodSearch');
        const query: SearchFoodQuery = {
            query: this._searchString,
            page: this._selectedTab,
            nbElem: 20
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

    /**
     * Tri le tableau results en fonction du nom, desc ou asc suivant le boolean sortName
     */
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

    /**
     * Tri le tableau results en fonction du nom, dec ou asc suivant le boolean sortScore
     */
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

    /**
     * Passe à la page suivante, entre 1 et total_pages (avance de façon circulaire)
     */
    public nextTab() {
        if (this._selectedTab === this.searchFoodResponse.total_pages) {
            this._selectedTab = 1;
        } else {
            this._selectedTab++;
        }

        this.searchFood();

    }

    /**
     * Va à la dernière page (total_pages)
     */
    public lastTab() {
        this._selectedTab = this.searchFoodResponse.total_pages;
        this.searchFood();
    }

    /**
     * Retourne à la première page (1)
     */
    public firstTab() {
        this._selectedTab = 1;
        this.searchFood();
    }

    /**
     * Retourne à la page précédente (recule de façon circulaire)
     */
    public beforeTab() {
        if (this._selectedTab !== 1) {
            this._selectedTab--;
        } else {
            this._selectedTab = this.searchFoodResponse.total_pages;
        }
        this.searchFood();
    }


}
