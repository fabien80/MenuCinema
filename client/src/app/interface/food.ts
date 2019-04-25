import {FoodType} from '../enum/FoodType';

export interface FoodInterface {
    id: number;
    type: FoodType;
    nom: string;
    description: string;
    prix: number;
}

export interface SearchFoodResponse {
    page?: number;
    results?: FoodInterface[];
    total_results?: number;
    total_pages?: number;
}

export interface SearchFoodQuery {
    query?: string;
    nbElem?: number;
    foodType?: FoodType;
    page?: number; // Specify which page to query. minimum: 1, default: 1
}
