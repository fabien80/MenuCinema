import {ProductInterface} from '../../interface/ProductInterface';

export abstract class Product implements ProductInterface {
    private _id: number;
    private _prix: number;

    constructor(id: number, prix: number) {
        this._id = id;
        this._prix = prix;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get prix(): number {
        return this._prix;
    }

    set prix(value: number) {
        this._prix = value;
    }
}
