import {SearchFoodInterface, SearchMenuInterface} from "./SearchInterface";
import {MenuClass} from "../product/menu/menu";
import {Food} from "../product/food/food";

export interface ProductsByIdInterface {
    menus: MenuClass[],
    foods: Food[]
}
