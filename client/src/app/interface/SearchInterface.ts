import {ProductType} from '../enum/ProductType';
import {FoodInterface} from './FoodInterface';

export interface SearchFoodInterface {
    product?: FoodInterface;
}

export interface SearchMenusInterface {
    menu?: SearchMenuInterface;
}

export interface SearchMenuInterface {
    foodGroups: {
        product: FoodInterface[];
    };
    prix: number;
    nom: string;
    id: number;
    type: ProductType;
}

export interface SearchProductQuery {
    query?: string;
    type?: ProductType;
}

export interface SearchProductsByIdInterface {
    menus: SearchMenuInterface[],
    foods: FoodInterface[]
}

