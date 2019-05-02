import {ProductGroup} from '../class/productGroup';
import {Product} from '../class/Product';
import {MenuClass} from './menu';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {MenuGroupInterface, MenuInterface} from '../../interface/MenuInterface';

export class MenuGroup extends ProductGroup<MenuClass> {


    public static fromData(data: MenuGroupInterface) {
        const {amount, product} = data;
        console.log(data.product);
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
