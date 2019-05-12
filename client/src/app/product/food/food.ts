import {FoodInterface} from '../../interface/FoodInterface';
import {ProductType} from '../../enum/ProductType';
import {Product} from '../class/Product';

export class Food extends Product implements FoodInterface {
    public description: string;
    public nom: string;

    static fromData(data: FoodInterface) {
        const {description, id, nom, prix, type} = data;
        return new this(id, prix, description, nom, type);
    }

    constructor(id: number, prix: number, description: string, nom: string, type: ProductType) {
        super(id, prix,type);
        this.description = description;
        this.nom = nom;
    }


}
