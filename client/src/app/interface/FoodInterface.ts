import {ProductType} from '../enum/ProductType';

export interface FoodInterface {
    id: number;
    type: ProductType;
    nom: string;
    description: string;
    prix: number;
}

export interface FoodGroupInterface {
    food: FoodInterface;
    amount: number;
}
