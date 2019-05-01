import {ProductType} from '../enum/ProductType';
import {ProductInterface} from './ProductInterface';

export interface SearchProductResponse {
    page?: number;
    results?: ProductInterface[];
    total_results?: number;
    total_pages?: number;
}

export interface SearchProductQuery {
    query?: string;
    nbElem?: number;
    type?: ProductType;
    page?: number; // Specify which page to query. minimum: 1, default: 1
}
