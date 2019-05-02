import {BasketInterface} from '../interface/BasketInterface';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';
import {Product} from '../product/class/Product';
import {FoodGroupInterface} from '../interface/FoodInterface';
import {MenuGroupInterface} from '../interface/MenuInterface';
import {ProductInterface} from '../interface/ProductInterface';

export class Basket implements BasketInterface {
    foodGroups: FoodGroup[];
    menuGroups: MenuGroup[];
    movies: Product[];
    total: number;

    public static fromData(basketInterface: BasketInterface) {
        const {menuGroups, foodGroups, movies, total} = basketInterface;
        const foodGroupsClas = foodGroups.reduce((acc: FoodGroup[], currentValue: FoodGroupInterface) => {
            const foodGroup = FoodGroup.fromData(currentValue);
            acc.push(foodGroup);
            return acc;
        }, []);

        const menuGroupsClass = menuGroups.reduce((acc: MenuGroup[], currentValue: MenuGroupInterface) => {
            const menuGroup = MenuGroup.fromData(currentValue);
            acc.push(menuGroup);
            return acc;
        }, []);

        return new this(foodGroupsClas, menuGroupsClass, [], total);
    }


    constructor(foodGroups: FoodGroup[], menuGroups: MenuGroup[], movies: Product[], total: number) {
        this.foodGroups = foodGroups;
        this.menuGroups = menuGroups;
        this.movies = movies;
        this.total = total;
    }
}
