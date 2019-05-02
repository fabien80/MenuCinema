import {BasketInterface} from '../interface/BasketInterface';
import {FoodGroup} from '../product/food/foodGroup';
import {MenuGroup} from '../product/menu/MenuGroup';
import {Product} from '../product/class/Product';
import {ProductGroupInterface, ProductInterface} from '../interface/ProductInterface';
import {FoodInterface} from '../interface/FoodInterface';
import {MenuInterface} from '../interface/MenuInterface';

export class Basket implements BasketInterface {
    foodGroups: FoodGroup[];
    menuGroups: MenuGroup[];
    movies: Product[];
    total: number;

    public static fromData(basketInterface: BasketInterface) {
        const {menuGroups, foodGroups, movies, total} = basketInterface;
        const foodGroupsClas = foodGroups.reduce((acc: FoodGroup[], currentValue: ProductGroupInterface<FoodInterface>) => {
            const foodGroup = FoodGroup.fromData(currentValue);
            acc.push(foodGroup);
            return acc;
        }, []);

        const menuGroupsClass = menuGroups.reduce((acc: MenuGroup[], currentValue: ProductGroupInterface<MenuInterface>) => {
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
