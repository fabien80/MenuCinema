import {ProductGroup} from '../class/productGroup';
import {Food} from './food';
import {FoodGroupInterface} from '../../interface/FoodInterface';
import {ProductGroupInterface} from '../../interface/ProductInterface';

export class FoodGroup extends ProductGroup<Food> implements FoodGroupInterface {


    public static fromData(data: FoodGroupInterface) {
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
