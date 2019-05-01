import {FoodGroup, FoodInterface} from '../interface/FoodInterface';
import {MenuInterface, MenuGroup} from '../interface/BasketInterface';

export class TypeConverter {
    private static readonly MENU_SPECIFIC_ATTR = 'total';
    private static readonly MENUGROUP_SPECIFIC_ATTR = 'menu';

    constructor() {
    }

    /**
     * Regarde si l'attribut MENU_SPECIFIC_ATTR est dans date
     * @param data: une donnée de type foodInterface ou MenuInterface
     */
    public static isMenu(data: FoodInterface | MenuInterface) {
        let bool: boolean;
        bool = this.MENU_SPECIFIC_ATTR in data;
        console.log(data);
        console.log(bool);
        return bool;
    }

    public static isFood(data: FoodInterface | MenuInterface) {
        let bool: boolean;
        bool = !(this.MENU_SPECIFIC_ATTR in data);
        return bool;
    }


    public static toFood(data: FoodInterface | MenuInterface) {
        let food: FoodInterface;
        food = data as FoodInterface;
        return food;
    }

    public static toMenu(data: FoodInterface | MenuInterface) {
        let menu: MenuInterface;
        menu = data as MenuInterface;
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

    public static menuToMenuGroup(menu: MenuInterface, amount: number) {
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
