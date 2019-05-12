import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {MovieResponse} from '../../tmdb-data/Movie';
import {CommandeInterface} from '../../interface/CommandeInterface';
import {TmdbService} from '../../services/tmdb.service';
import {MenuInterface} from '../../interface/MenuInterface';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {FoodInterface} from '../../interface/FoodInterface';
import {FoodGroup} from '../../product/food/foodGroup';


@Component({
    selector: 'app-command-history',
    templateUrl: './command-history.component.html',
    styleUrls: ['./command-history.component.scss']
})
export class CommandHistoryComponent implements OnInit {


    private clientService: ClientService;
    private data;
    private movies: MovieResponse[];

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    ngOnInit() {
        this.clientService.getClientHistory().then(data => {
            this.data = data;
            console.log('Data !!');
            console.log(data);
        });

    }

    private fillMenus(menus: MenuInterface[]): ProductGroupInterface<MenuInterface>[] {
        let allReadyExist = false;
        const menusGroup: ProductGroupInterface<MenuInterface>[] = [];
        menus.forEach((menu) => {
            menusGroup.forEach((menuGroup) => {
                if (menu.id === menuGroup.product.id) {
                    allReadyExist = true;
                    menuGroup.amount++;
                }
            });
            if (!allReadyExist) {
                const newMenuGroup: ProductGroupInterface<MenuInterface> = {
                    product: menu,
                    amount: 1
                };
                menusGroup.push(newMenuGroup);
            }
            allReadyExist = false;
        });
        return menusGroup;
    }

    private fillFoods(foods: FoodInterface[]): ProductGroupInterface<FoodInterface>[] {
        let allReadyExist = false;
        const foodsGroup: ProductGroupInterface<FoodInterface>[] = [];
        foods.forEach((food) => {
            foodsGroup.forEach((foodGroup) => {
                if (food.id === foodGroup.product.id) {
                    allReadyExist = true;
                    foodGroup.amount++;
                }
            });
            if (!allReadyExist) {
                const newFoodGroup: ProductGroupInterface<FoodInterface> = {
                    product: food,
                    amount: 1
                };
                foodsGroup.push(newFoodGroup);
            }
            allReadyExist = false;
        });
        return foodsGroup;
    }



}
