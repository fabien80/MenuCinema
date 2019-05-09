import {Food} from '../product/food/food';
import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface} from './ProductInterface';

export interface MenuInterface {
    foodGroups: ProductGroupInterface<FoodInterface>[];
    prix: number;
    id: number;
    nom: string;

}
