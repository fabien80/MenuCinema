import {ProductGroupInterface} from './ProductInterface';

export interface MenuInterface {
    foodGroups: ProductGroupInterface[];
    prix: number;
    id: number;

}

export interface MenuGroup {
    menu: MenuInterface;
    amount: number;
}
