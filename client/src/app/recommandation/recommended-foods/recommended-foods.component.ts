import {Component, Input, OnInit} from '@angular/core';
import {FoodInterface} from "../../interface/FoodInterface";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ProductsByIdInterface} from "../../interface/ProductsByIdInterface";
import {ApiService} from "../../services/api.service";
import {MenuClass} from "../../product/menu/menu";
import {SearchMenuInterface, SearchProductsByIdInterface} from "../../interface/SearchInterface";
import {Food} from "../../product/food/food";
import {MatDialog} from "@angular/material";
import {Product} from "../../product/class/Product";
import {AddProductToBasketComponent} from "../../dialogs/add-product-to-basket/add-product-to-basket.component";
import {ProductType} from "../../enum/ProductType";
import {AddEventType} from "../../enum/AddEventType";
import {AddEventInterface} from "../../interface/AddEventInterface";
import {ProductGroupInterface} from "../../interface/ProductInterface";
import {BasketService} from "../../basket/basket.service";

@Component({
    selector: 'app-recommended-foods',
    templateUrl: './recommended-foods.component.html',
    styleUrls: ['./recommended-foods.component.scss']
})
export class RecommendedFoodsComponent implements OnInit {
    @Input() foodIds: string[];
    private products: ProductsByIdInterface = {
        menus: [],
        foods: []
    };
    showNavigationArrows = true;
    showNavigationIndicators = true;

    constructor(private apiService: ApiService,
                private config: NgbCarouselConfig,
                private router: Router,
                private dialog: MatDialog,
                private basketService: BasketService) {
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }

    ngOnInit() {
        const stringIds = this.foodIds.join(";");
        this.apiService.getProductsByIds(stringIds).then((value: SearchProductsByIdInterface) => {
            console.log(value);
            value.menus.forEach((menu: SearchMenuInterface) => {
                this.products.menus.push(MenuClass.fromSearchData(menu));
            });

            console.log(value.foods);

            value.foods.forEach((food: FoodInterface) => {
                this.products.foods.push(Food.fromData(food));
            });

            console.log(this.products);
        });
    }

    openDialog(product: Product) {
        const dialogRef = this.dialog.open(AddProductToBasketComponent, {
            width: '250',
            data: product
        });

        dialogRef.afterClosed().toPromise().then((productGroupInterface: ProductGroupInterface<any>) => {
            if (productGroupInterface !== undefined) {
                const addEvent: AddEventInterface = {
                    data: productGroupInterface,
                    event: this.productTypeToEvenType(product.type)
                };
                this.basketService.onAdd(addEvent);
            }
        });

    }

    productTypeToEvenType(productType: ProductType) {
        switch (productType) {
            case ProductType.Movie:
                return AddEventType.addMovie;
            case ProductType.Menu:
                return AddEventType.addMenu;
            default:
                return AddEventType.addFood;
        }

    }


}
