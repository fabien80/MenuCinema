import {Product} from './Product';
import {ProductGroupInterface} from '../../interface/ProductInterface';

export class ProductGroup implements ProductGroupInterface {
    private _product: Product;
    private _amount: number;


    constructor(product: Product, amount: number) {
        this._product = product;
        this._amount = amount;
    }

    public getTotal() {
        return this._product.prix * this._amount;
    }

    get product(): Product {
        return this._product;
    }

    set product(value: Product) {
        this._product = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}
