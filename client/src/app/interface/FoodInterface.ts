import {ProductType} from '../enum/ProductType';

export interface FoodInterface {
    id: number;
    type: ProductType;
    nom: string;
    description: string;
    prix: number;
}
