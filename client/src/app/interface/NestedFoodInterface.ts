import {MenuInterface} from './MenuInterface';
import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface} from './ProductInterface';
import {SearchMenuInterface} from './SearchInterface';

export interface NestedFoodInterface {
    menu: MenuInterface[];
    product: FoodInterface[];
}
