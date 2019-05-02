import {MenuInterface} from '../../interface/MenuInterface';
import {Product} from '../class/Product';
import {FoodGroup} from '../food/foodGroup';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {FoodInterface} from '../../interface/FoodInterface';

export class MenuClass extends Product implements MenuInterface {
    public foodGroups: FoodGroup[];

    static fromData(data: MenuInterface) {
        const {prix, foodGroups, id} = data;
        const foodGroupsClass = foodGroups.reduce((acc: FoodGroup[], currentValue: ProductGroupInterface<FoodInterface>) => {
            const foodGroup = FoodGroup.fromData(currentValue);
            acc.push(foodGroup);
            return acc;
        }, []);
        return new this(id, prix, foodGroupsClass);
    }

    constructor(id: number, prix: number, foodGroups: FoodGroup[]) {
        super(id, prix);
        this.foodGroups = foodGroups;
    }
}
