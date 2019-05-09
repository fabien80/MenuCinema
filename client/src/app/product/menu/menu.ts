import {MenuInterface} from '../../interface/MenuInterface';
import {Product} from '../class/Product';
import {FoodGroup} from '../food/foodGroup';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {FoodInterface} from '../../interface/FoodInterface';
import {SearchFoodInterface, SearchMenuInterface, SearchMenusInterface} from '../../interface/SearchInterface';
import {Food} from '../food/food';

export class MenuClass extends Product implements MenuInterface {
    public foodGroups: FoodGroup[];
    public nom: string;

    static fromSearchData(data: SearchMenuInterface) {
        const {foodGroups, id, nom, prix} = data;
        console.log(data);
        const foodGroupsClass = foodGroups.product.reduce((acc: FoodGroup[], currentValue: FoodInterface) => {
            const foodGroup = FoodGroup.fromFoodInterface(currentValue);
            acc.push(foodGroup);
            return acc;
        }, []);
        return new this(id, prix, foodGroupsClass, nom);
    }

    static fromData(data: MenuInterface) {
        const {prix, foodGroups, id, nom} = data;
        const foodGroupsClass = foodGroups.reduce((acc: FoodGroup[], currentValue: ProductGroupInterface<FoodInterface>) => {
            const foodGroup = FoodGroup.fromData(currentValue);
            acc.push(foodGroup);
            return acc;
        }, []);
        return new this(id, prix, foodGroupsClass, nom);
    }

    constructor(id: number, prix: number, foodGroups: FoodGroup[], nom: string) {
        super(id, prix);
        this.foodGroups = foodGroups;
        this.nom = nom;
    }


}
