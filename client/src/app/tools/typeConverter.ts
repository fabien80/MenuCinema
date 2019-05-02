import {FoodGroupInterface, FoodInterface} from '../interface/FoodInterface';
import {MenuGroupInterface} from '../interface/MenuInterface';

export class TypeConverter {
    private static readonly MENU_SPECIFIC_ATTR = 'total';
    private static readonly MENUGROUP_SPECIFIC_ATTR = 'menu';

    constructor() {
    }

    /**
     * Regarde si l'attribut MENU_SPECIFIC_ATTR est dans date
     * @param data: une donnée de type foodInterface ou FoodInterface
     */
    public static isMenu(data: FoodInterface | FoodInterface) {
        let bool: boolean;
        bool = this.MENU_SPECIFIC_ATTR in data;
        console.log(data);
        console.log(bool);
        return bool;
    }

    public static isFood(data: FoodInterface | FoodInterface) {
        let bool: boolean;
        bool = !(this.MENU_SPECIFIC_ATTR in data);
        return bool;
    }


    public static toFood(data: FoodInterface | FoodInterface) {
        let food: FoodInterface;
        food = data as FoodInterface;
        return food;
    }

    public static toMenu(data: FoodInterface | FoodInterface) {
        let menu: FoodInterface;
        menu = data as FoodInterface;
        return menu;
    }

    public static isMenuGroup(data: FoodGroupInterface | MenuGroupInterface) {
        let bool: boolean;
        bool = this.MENUGROUP_SPECIFIC_ATTR in data;
        return bool;
    }

    public static isFoodGroup(data: FoodGroupInterface | MenuGroupInterface) {
        let bool: boolean;
        bool = !(this.MENUGROUP_SPECIFIC_ATTR in data);
        return bool;
    }

    public static toFoodGroup(data: FoodGroupInterface | MenuGroupInterface) {
        let foodGroup: FoodGroupInterface;
        foodGroup = data as FoodGroupInterface;
        return foodGroup;
    }

    public static toMenuGroup(data: FoodGroupInterface | MenuGroupInterface) {
        let menuGroup: MenuGroupInterface;
        menuGroup = data as MenuGroupInterface;
        return menuGroup;
    }

   /* public static menuToMenuGroup(menu: FoodInterface, amount: number) {
        let menuGroup: MenuGroup;
        menuGroup = {menu, amount};
        return menuGroup;
    } */

    public static foodToFoodGroup(food: FoodInterface, amount: number) {
        let foodGroup: FoodGroupInterface;
        foodGroup = {food, amount};
        return foodGroup;
    }

    public static computeGroupPrice(group: FoodGroupInterface | MenuGroupInterface) {
        let price: number;
        if (this.isMenuGroup(group)) {
            price = this.toMenuGroup(group).menu.prix * group.amount;
        } else {
            price = this.toFoodGroup(group).food.prix * group.amount;
        }

        return price;
    }


}
