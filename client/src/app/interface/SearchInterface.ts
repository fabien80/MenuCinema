import {ProductType} from '../enum/ProductType';
import {ProductInterface} from './ProductInterface';
import {Product} from '../product/class/Product';

export interface SearchProductResponse {
    results?: Product[];
}

export interface SearchProductQuery {
    query?: string;
    type?: ProductType;
}
