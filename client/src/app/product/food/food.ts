import {FoodInterface} from '../../interface/FoodInterface';
import {ProductType} from '../../enum/ProductType';
import {Product} from '../class/Product';

export class Food extends Product implements FoodInterface {
    private _description: string;
    private _nom: string;
    private _type: ProductType;


    constructor(id: number, prix: number, description: string, nom: string, type: ProductType) {
        super(id, prix);
        this._description = description;
        this._nom = nom;
        this._type = type;
    }


    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get type(): ProductType {
        return this._type;
    }

    set type(value: ProductType) {
        this._type = value;
    }
}
