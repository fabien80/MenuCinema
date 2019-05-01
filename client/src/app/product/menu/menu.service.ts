import {Injectable} from '@angular/core';
import {Food} from '../food/food';
import {Product} from '../class/Product';
import {MenuClass} from './menu';
import {MenuInterface} from '../../interface/MenuInterface';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor() {
    }

    public interfaceToClass(menuInterface: MenuInterface) {
        return MenuClass.fromData(menuInterface);
    }

    public interfaceTabToClassTab(menus: MenuInterface[]) {
        return menus.reduce((menusClass: MenuClass[], elem: MenuInterface) => {
            menusClass.push(MenuClass.fromData(elem));
            return menusClass;
        }, []);
    }

    public productToMenu(product: Product) {
        return product as MenuClass;
    }
}
