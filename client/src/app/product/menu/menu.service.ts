import {Injectable} from '@angular/core';
import {Product} from '../class/Product';
import {MenuClass} from './menu';
import {MenuInterface} from '../../interface/MenuInterface';
import {MenuGroup} from './MenuGroup';
import {ProductGroupInterface} from '../../interface/ProductInterface';
import {SearchMenuInterface, SearchMenusInterface} from '../../interface/SearchInterface';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor() {
    }

    public menuGroupInterfaceToMenuGroup(menuGroups: ProductGroupInterface<MenuInterface>[]) {
        return menuGroups.reduce((acc: MenuGroup[], currentValue: ProductGroupInterface<MenuInterface>) => {
            acc.push(MenuGroup.fromData(currentValue));
            return acc;
        }, []);
    }

    public interfaceToClass(menuInterface: MenuInterface) {
        return MenuClass.fromData(menuInterface);
    }

    public productToMenu(product: Product) {
        return product as MenuClass;
    }

    public interfaceTabToClassTab(menus: MenuInterface[]) {
        return menus.reduce((menusClass: MenuClass[], elem: MenuInterface) => {
            menusClass.push(MenuClass.fromData(elem));
            return menusClass;
        }, []);
    }

    public searchMenuInterfaceTabToClassTab(menus: SearchMenusInterface[]) {
        return menus.reduce((menusClass: MenuClass[], elem: SearchMenusInterface) => {
            menusClass.push(MenuClass.fromSearchData(elem.menu));
            return menusClass;
        }, []);
    }
}
