import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface, ProductInterface} from './ProductInterface';
import {MenuInterface} from './MenuInterface';

export interface BasketInterface {
    foodGroups: ProductGroupInterface<FoodInterface>[];
    menuGroups: ProductGroupInterface<MenuInterface>[];
    movies: ProductInterface[];
    total: number;
}


