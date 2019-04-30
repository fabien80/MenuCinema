import {FoodGroup} from './food';

export interface Basket {
    foodGroups: FoodGroup[];
    menuGroups: MenuGroup[];
    total: number;
}

export interface Menu {
    foodGroups: FoodGroup[];
    total: number;
    id: number;
}

export interface MenuGroup {
    menu: Menu;
    amount: number;
}

