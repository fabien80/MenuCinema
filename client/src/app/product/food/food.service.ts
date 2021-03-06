import {Injectable} from '@angular/core';
import {FoodInterface} from '../../interface/FoodInterface';
import {Food} from './food';
import {Product} from '../class/Product';
import {BasketService} from '../../basket/basket.service';
import {ProductGroup} from '../class/productGroup';
import {FoodGroup} from './foodGroup';
import {SearchFoodInterface} from '../../interface/SearchInterface';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor() {
    }

    public interfaceTabToClassTab(foods: FoodInterface[]) {
        return foods.reduce((foodsClass: Food[], elem: FoodInterface) => {
            foodsClass.push(Food.fromData(elem));
            return foodsClass;
        }, []);
    }


    public interfaceToClass(foodInterface: FoodInterface) {
        return Food.fromData(foodInterface);
    }

    public productToFood(product: Product) {
        return product as Food;
    }

    public searchFoodInterfaceTabToClassTab(foods: SearchFoodInterface[]) {
        return foods.reduce((foodsClass: Food[], elem: SearchFoodInterface) => {
            foodsClass.push(Food.fromData(elem.product));
            return foodsClass;
        }, []);
    }
}
