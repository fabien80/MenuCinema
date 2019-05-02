import {Product} from '../product/class/Product';
import {ProductGroup} from '../product/class/productGroup';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';

export interface BasketInterface {
    foodGroups: FoodGroup[];
    menuGroups: MenuGroup[];
    movies: Product[];
    total: number;
}


