import {Component, OnInit} from '@angular/core';
import {ProductType} from '../../enum/ProductType';
import {SearchProductQuery} from '../../interface/SearchInterface';
import {ProductService} from '../product.service';
import {Food} from '../food/food';
import {MenuClass} from '../menu/menu';
import {FoodService} from '../food/food.service';
import {FoodInterface} from '../../interface/FoodInterface';
import {MenuService} from '../menu/menu.service';
import {MenuInterface} from '../../interface/MenuInterface';
import {AddEventInterface} from '../../interface/AddEventInterface';
import {AddEventType} from '../../enum/AddEventType';

@Component({
    selector: 'app-selection-food',
    templateUrl: './product-selection.component.html',
    styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent implements OnInit {
    private readonly ENTREE: ProductType = ProductType.Entree;
    private readonly PLAT: ProductType = ProductType.Plat;
    private readonly DESSERT: ProductType = ProductType.Dessert;
    private readonly BOISSON: ProductType = ProductType.Boisson;
    private readonly MENU: ProductType = ProductType.Menu;

    private entrees: Food[];
    private plats: Food[];
    private desserts: Food[];
    private boissons: Food[];
    private menus: MenuClass[];

    constructor(private productService: ProductService,
                private foodService: FoodService,
                private menuService: MenuService) {
    }

    ngOnInit() {
        this.getAllProducts();
    }

    async getAllProducts() {
        this.entrees = await this.getFoods(ProductType.Entree);
        this.plats = await this.getFoods(ProductType.Plat);
        this.desserts = await this.getFoods(ProductType.Dessert);
        this.boissons = await this.getFoods(ProductType.Boisson);
        this.menus = await this.getMenus();
    }

    async getMenus() {
        const res = await this.search(ProductType.Menu);
        return this.menuService.interfaceTabToClassTab(res.results as MenuInterface[]);
    }

    async getFoods(type: ProductType) {
        const res = await this.search(type);
        return this.foodService.interfaceTabToClassTab(res.results as FoodInterface[]);
    }

    async search(type: ProductType) {
        const query: SearchProductQuery = {
            type
        };
        return await this.productService.searchMock(query);
        // return this.foodService.interfaceTabToClassTab(res.results as FoodInterface[]);
    }


    onAdd(addEvent: AddEventInterface) {
        console.log(addEvent);
        switch (addEvent.event) {
            case AddEventType.addFood:
                this.foodService.addToBasket(addEvent.data);
                break;
            case AddEventType.addMenu:
                this.menuService.addToBasket(addEvent.data);
                break;
            case AddEventType.addMovie:
                break;

        }
    }

    getAddEventMenu() {
        return AddEventType.addMenu;
    }

    getAddEventFood() {
        return AddEventType.addFood;
    }
}