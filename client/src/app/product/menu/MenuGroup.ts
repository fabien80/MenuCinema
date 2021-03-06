import {ProductGroup} from '../class/productGroup';
import {Product} from '../class/Product';
import {MenuClass} from './menu';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {MenuInterface} from '../../interface/MenuInterface';

export class MenuGroup extends ProductGroup<MenuClass> {


    public static fromData(data: ProductGroupInterface<MenuInterface>) {
        const {amount, product} = data;
        const menu = MenuClass.fromData(product);
        return new this(menu, amount);

    }

    constructor(product: MenuClass, amount: number) {
        super(product, amount);
    }

    getTotal(): number {
        return this.product.prix * this.amount;
    }


}
