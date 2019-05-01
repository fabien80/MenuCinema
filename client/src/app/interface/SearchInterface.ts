import {MenuInterface} from './BasketInterface';
import {ProductType} from '../enum/ProductType';
import {FoodInterface} from './FoodInterface';

export interface SearchProductResponse {
    page?: number;
    results?: (FoodInterface | MenuInterface)[];
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
