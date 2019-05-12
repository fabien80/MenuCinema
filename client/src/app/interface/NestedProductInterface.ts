import {MenuInterface} from './MenuInterface';
import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface} from './ProductInterface';
import {SearchMenuInterface} from './SearchInterface';

export interface NestedProductInterface {
    menu: SearchMenuInterface[];
    product: FoodInterface[];
}
