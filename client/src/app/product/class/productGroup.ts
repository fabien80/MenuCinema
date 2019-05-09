import {ProductGroupInterface} from '../../interface/ProductInterface';

export abstract class ProductGroup<T> implements ProductGroupInterface<T> {
    public product: T;
    public amount: number;

    constructor(product: T, amount: number) {
        this.product = product;
        this.amount = amount;
    }

    public abstract getTotal(): number;

}
