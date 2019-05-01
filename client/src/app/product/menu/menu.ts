import {MenuInterface} from '../../interface/MenuInterface';
import {Product} from '../class/Product';
import {ProductGroupInterface} from '../../interface/ProductInterface';

export class MenuClass extends Product implements MenuInterface {
    private _foodGroups: ProductGroupInterface[];
    private _total: number;


    constructor(id: number, prix: number, foodGroups: ProductGroupInterface[], total: number) {
        super(id, prix);
        this._foodGroups = foodGroups;
        this._total = total;
    }

    get foodGroups(): ProductGroupInterface[] {
        return this._foodGroups;
    }

    set foodGroups(value: ProductGroupInterface[]) {
        this._foodGroups = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }
}
