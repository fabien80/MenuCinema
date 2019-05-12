import {Food} from '../product/food/food';
import {FoodInterface} from './FoodInterface';
import {ProductGroupInterface} from './ProductInterface';
import {ProductType} from "../enum/ProductType";

export interface MenuInterface {
    foodGroups: ProductGroupInterface<FoodInterface>[];
    prix: number;
    id: number;
    nom: string;
    type: ProductType

}
