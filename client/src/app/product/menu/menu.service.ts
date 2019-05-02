import {Injectable} from '@angular/core';
import {Food} from '../food/food';
import {Product} from '../class/Product';
import {MenuClass} from './menu';
import {MenuGroupInterface, MenuInterface} from '../../interface/MenuInterface';
import {BasketService} from '../../basket/basket.service';
import {ProductGroup} from '../class/productGroup';
import {MenuGroup} from './MenuGroup';
import {ProductGroupInterface} from '../../interface/ProductInterface';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor() {
    }

    public interfaceToClass(menuInterface: MenuInterface) {
        return MenuClass.fromData(menuInterface);
    }

    public productToMenu(product: Product) {
        return product as MenuClass;
    }

    public menuGroupInterfaceToMenuGroup(menuGroups: MenuGroupInterface[]) {
        return menuGroups.reduce((acc: MenuGroup[], currentValue: MenuGroupInterface) => {
            acc.push(MenuGroup.fromData(currentValue));
            return acc;
        }, []);
    }

    public interfaceTabToClassTab(menus: MenuInterface[]) {
        return menus.reduce((menusClass: MenuClass[], elem: MenuInterface) => {
            menusClass.push(MenuClass.fromData(elem));
            return menusClass;
        }, []);
    }
}
