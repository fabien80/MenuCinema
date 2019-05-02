import {MenuInterface} from '../../interface/MenuInterface';
import {Product} from '../class/Product';
import {FoodGroupInterface} from '../../interface/FoodInterface';

export class MenuClass extends Product implements MenuInterface {
    public foodGroups: FoodGroupInterface[];

    static fromData(data: MenuInterface) {
        const {prix, foodGroups, id} = data;
        return new this(id, prix, foodGroups);
    }

    constructor(id: number, prix: number, foodGroups: FoodGroupInterface[]) {
        super(id, prix);
        this.foodGroups = foodGroups;
    }
}
