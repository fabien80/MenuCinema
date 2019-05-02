import {Food} from '../product/food/food';
import {FoodGroupInterface} from './FoodInterface';

export interface MenuInterface {
    foodGroups: FoodGroupInterface[];
    prix: number;
    id: number;

}

export interface MenuGroupInterface {
    menu: MenuInterface;
    amount: number;
}
