import {Product} from '../product/class/Product';

export interface ProductGroupInterface {
    product: ProductInterface;
    amount: number;
}

export interface ProductInterface {
    id: number;
    prix: number;
}
