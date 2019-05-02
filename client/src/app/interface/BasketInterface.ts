import {Product} from '../product/class/Product';
import {ProductGroup} from '../product/class/productGroup';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';
import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface, ProductInterface} from './ProductInterface';
import {MenuInterface} from './MenuInterface';

export interface BasketInterface {
    foodGroups: ProductGroupInterface<FoodInterface>[];
    menuGroups: ProductGroupInterface<MenuInterface>[];
    movies: ProductInterface[];
    total: number;
}


