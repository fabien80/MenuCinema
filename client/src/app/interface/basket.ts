import {FoodInterface, FoodGroup} from './food';

export interface Basket {
    foods: FoodGroup[];
    menus: MenuGroup[];
    total: number;
}

export interface Menu {
    foods: FoodGroup[];
    total: number;
    id: number;
}

export interface MenuGroup {
    menu: Menu;
    amount: number;
}

