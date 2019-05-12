import {Component, OnInit} from '@angular/core';
import {ProductType} from '../../enum/ProductType';
import {SearchFoodInterface, SearchProductQuery} from '../../interface/SearchInterface';
import {ProductService} from '../product.service';
import {Food} from '../food/food';
import {MenuClass} from '../menu/menu';
import {FoodService} from '../food/food.service';
import {FoodInterface} from '../../interface/FoodInterface';
import {MenuService} from '../menu/menu.service';
import {MenuInterface} from '../../interface/MenuInterface';
import {AddEventInterface} from '../../interface/AddEventInterface';
import {AddEventType} from '../../enum/AddEventType';
import {FoodGroup} from '../food/foodGroup';
import {MenuGroup} from '../menu/MenuGroup';
import {BasketService} from '../../basket/basket.service';

@Component({
    selector: 'app-selection-product',
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
                private menuService: MenuService,
                private basketService: BasketService) {
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
        const res: any = await this.search(ProductType.Menu);
        console.log(res);
        return this.menuService.searchMenuInterfaceTabToClassTab(res);
        // return this.menuService.interfaceTabToClassTab(res as MenuInterface[]);
    }

    async getFoods(type: ProductType) {
        const res: any = await this.search(type);
        console.log(res);
        return this.foodService.searchFoodInterfaceTabToClassTab(res);
        // return this.foodService.interfaceTabToClassTab(res as FoodInterface[]);
    }

    async search(type: ProductType) {
        const query: SearchProductQuery = {
            type
        };
        return await this.productService.search(query);
        // return this.foodService.interfaceTabToClassTab(res.results as FoodInterface[]);
    }


    onAdd(addEvent: AddEventInterface) {
        this.basketService.onAdd(addEvent);
    }

    getAddEventMenu() {
        return AddEventType.addMenu;
    }

    getAddEventFood() {
        return AddEventType.addFood;
    }
}
