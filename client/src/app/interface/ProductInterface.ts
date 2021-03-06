import {ProductType} from "../enum/ProductType";

export interface ProductGroupInterface<T> {
    product: T;
    amount: number;
}

export interface ProductInterface {
    id: number;
    prix: number;
    type: ProductType
}
