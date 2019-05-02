import {ProductGroupInterface} from '../../interface/ProductInterface';

export abstract class ProductGroup<T> implements ProductGroupInterface<T> {
    private _product: T;
    private _amount: number;


    constructor(product: T, amount: number) {
        this._product = product;
        this._amount = amount;
    }

    public abstract getTotal(): number;

    get product(): T {
        return this._product;
    }

    set product(value: T) {
        this._product = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}
