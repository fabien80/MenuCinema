import {ProductInterface} from '../../interface/ProductInterface';

export abstract class Product implements ProductInterface {
    public id: number;
    public prix: number;

    constructor(id: number, prix: number) {
        this.id = id;
        this.prix = prix;
    }
}
