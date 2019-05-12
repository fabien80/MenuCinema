import {ProductInterface} from '../../interface/ProductInterface';
import {ProductType} from "../../enum/ProductType";

export abstract class Product implements ProductInterface {
    public id: number;
    public prix: number;
    public type: ProductType;


    constructor(id: number, prix: number, type: ProductType) {
        this.id = id;
        this.prix = prix;
        this.type = type;
    }
}
