import {Product} from '../product/class/Product';
import {ProductGroup} from '../product/class/productGroup';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';
import {MenuGroupInterface} from './MenuInterface';
import {FoodGroupInterface} from './FoodInterface';
import {ProductInterface} from './ProductInterface';

export interface BasketInterface {
    foodGroups: FoodGroupInterface[];
    menuGroups: MenuGroupInterface[];
    movies: ProductInterface[];
    total: number;
}


