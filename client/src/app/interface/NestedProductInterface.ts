import {FoodInterface} from './FoodInterface';
import {SearchMenuInterface} from './SearchInterface';

export interface NestedProductInterface {
    menus: SearchMenuInterface[];
    foods: FoodInterface[];
}
