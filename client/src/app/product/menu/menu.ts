import {MenuInterface} from '../../interface/MenuInterface';
import {Product} from '../class/Product';
import {ProductGroupInterface} from '../../interface/ProductInterface';

export class MenuClass extends Product implements MenuInterface {
    private _foodGroups: ProductGroupInterface[];

    static fromData(data: MenuInterface) {
        const {prix, foodGroups, id} = data;
        return new this(id, prix, foodGroups);
    }

    constructor(id: number, prix: number, foodGroups: ProductGroupInterface[]) {
        super(id, prix);
        this._foodGroups = foodGroups;
    }

    get foodGroups(): ProductGroupInterface[] {
        return this._foodGroups;
    }

    set foodGroups(value: ProductGroupInterface[]) {
        this._foodGroups = value;
    }

}
