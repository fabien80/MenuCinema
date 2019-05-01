import {Product} from '../product/class/Product';
import {ProductGroup} from '../product/class/productGroup';

export interface BasketInterface {
    foodGroups: ProductGroup[];
    menuGroups: ProductGroup[];
    total: number;
}


