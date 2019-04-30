import {ProductType} from '../enum/ProductType';
import {Menu} from './basket';

export interface FoodInterface {
    id: number;
    type: ProductType;
    nom: string;
    description: string;
    prix: number;
}

export interface SearchResponse {
    page?: number;
    results?: (FoodInterface | Menu)[];
    total_results?: number;
    total_pages?: number;
}

export interface SearchQuery {
    query?: string;
    nbElem?: number;
    type?: ProductType;
    page?: number; // Specify which page to query. minimum: 1, default: 1
}

export interface FoodGroup {
    food: FoodInterface;
    amount: number;
}
