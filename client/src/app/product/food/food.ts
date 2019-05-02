import {FoodInterface} from '../../interface/FoodInterface';
import {ProductType} from '../../enum/ProductType';
import {Product} from '../class/Product';

export class Food extends Product implements FoodInterface {
    public description: string;
    public nom: string;
    public type: ProductType;

    static fromData(data: FoodInterface) {
        const {description, id, nom, prix, type} = data;
        return new this(id, prix, description, nom, type);
    }

    constructor(id: number, prix: number, description: string, nom: string, type: ProductType) {
        super(id, prix);
        this.description = description;
        this.nom = nom;
        this.type = type;
    }


}
