import {ProductGroup} from '../class/productGroup';
import {Food} from './food';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {FoodInterface} from '../../interface/FoodInterface';

export class FoodGroup extends ProductGroup<Food> {


    public static fromData(data: ProductGroupInterface<FoodInterface>) {
        const {amount, product} = data;
        const food: Food = Food.fromData(product);
        return new this(food, amount);
    }

    constructor(product: Food, amount: number) {
        super(product, amount);
    }

    getTotal() {
        return this.product.prix * this.amount;
    }


}
