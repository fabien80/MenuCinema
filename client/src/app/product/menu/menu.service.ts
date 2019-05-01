import {Injectable} from '@angular/core';
import {Food} from '../food/food';
import {Product} from '../class/Product';
import {MenuClass} from './menu';
import {MenuInterface} from '../../interface/MenuInterface';
import {BasketService} from '../../basket/basket.service';
import {ProductGroup} from '../class/productGroup';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private basketService: BasketService) {
    }

    public interfaceToClass(menuInterface: MenuInterface) {
        return MenuClass.fromData(menuInterface);
    }

    public productToMenu(product: Product) {
        return product as MenuClass;
    }

    public addToBasket(productGroup: ProductGroup) {
        this.basketService.addMenu(productGroup);
    }

    public interfaceTabToClassTab(menus: MenuInterface[]) {
        return menus.reduce((menusClass: MenuClass[], elem: MenuInterface) => {
            menusClass.push(MenuClass.fromData(elem));
            return menusClass;
        }, []);
    }
}
