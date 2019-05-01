import {Injectable} from '@angular/core';
import {FoodInterface, FoodGroup} from '../interface/FoodInterface';
import {BehaviorSubject} from 'rxjs';
import {TypeConverter} from '../tools/typeConverter';
import {BasketInterface} from '../interface/BasketInterface';
import {MenuGroup} from '../interface/MenuInterface';


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private _basket = new BehaviorSubject<BasketInterface>({
        foodGroups: [],
        menuGroups: [],
        total: 0
    });

    constructor() {
    }

    get basket(): BehaviorSubject<BasketInterface> {
        return this._basket;
    }

}
