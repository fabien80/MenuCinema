import {FoodGroup, FoodInterface} from '../interface/food';
import {Menu, MenuGroup} from '../interface/basket';

export class TypeConverter {
    private static readonly MENU_SPECIFIC_ATTR = 'total';
    private static readonly MENUGROUP_SPECIFIC_ATTR = 'menu';

    constructor() {
    }

    public static isMenu(data: FoodInterface | Menu) {
        let bool: boolean;
        bool = this.MENU_SPECIFIC_ATTR in data;
        console.log(data);
        console.log(bool);
        return bool;
    }

    public static isFood(data: FoodInterface | Menu) {
        let bool: boolean;
        bool = !(this.MENU_SPECIFIC_ATTR in data);
        return bool;
    }


    public static toFood(data: FoodInterface | Menu) {
        let food: FoodInterface;
        food = data as FoodInterface;
        return food;
    }

    public static toMenu(data: FoodInterface | Menu) {
        let menu: Menu;
        menu = data as Menu;
        return menu;
    }

    public static isMenuGroup(data: FoodGroup | MenuGroup) {
        let bool: boolean;
        bool = this.MENUGROUP_SPECIFIC_ATTR in data;
        return bool;
    }

    public static isFoodGroup(data: FoodGroup | MenuGroup) {
        let bool: boolean;
        bool = !(this.MENUGROUP_SPECIFIC_ATTR in data);
        return bool;
    }

    public static toFoodGroup(data: FoodGroup | MenuGroup) {
        let foodGroup: FoodGroup;
        foodGroup = data as FoodGroup;
        return foodGroup;
    }

    public static toMenuGroup(data: FoodGroup | MenuGroup) {
        let menuGroup: MenuGroup;
        menuGroup = data as MenuGroup;
        return menuGroup;
    }

    public static menuToMenuGroup(menu: Menu, amount: number) {
        let menuGroup: MenuGroup;
        menuGroup = {menu, amount};
        return menuGroup;
    }

    public static foodToFoodGroup(food: FoodInterface, amount: number) {
        let foodGroup: FoodGroup;
        foodGroup = {food, amount};
        return foodGroup;
    }

    public static computeGroupPrice(group: FoodGroup | MenuGroup) {
        let price: number;
        if (this.isMenuGroup(group)) {
            price = this.toMenuGroup(group).menu.total * group.amount;
        } else {
            price = this.toFoodGroup(group).food.prix * group.amount;
        }

        return price;
    }


}
