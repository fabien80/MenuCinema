import {MenuInterface} from './MenuInterface';
import {FoodInterface} from './FoodInterface';

export interface NestedFoodInterface {
    menu: MenuInterface;
    product: FoodInterface;
}
