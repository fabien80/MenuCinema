import {Injectable} from '@angular/core';
import {FoodInterface} from '../../interface/FoodInterface';
import {Food} from './food';
import {Product} from '../class/Product';
import {BasketService} from '../../basket/basket.service';
import {ProductGroup} from '../class/productGroup';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(private basketService: BasketService) {
    }

    public addToBasket(productGroup: ProductGroup) {
        this.basketService.addFood(productGroup);
    }

    public interfaceToClass(foodInterface: FoodInterface) {
        return Food.fromData(foodInterface);
    }

    public interfaceTabToClassTab(foods: FoodInterface[]) {
        return foods.reduce((foodsClass: Food[], elem: FoodInterface) => {
            foodsClass.push(Food.fromData(elem));
            return foodsClass;
        }, []);
    }

    public productToFood(product: Product) {
        return product as Food;
    }
}
