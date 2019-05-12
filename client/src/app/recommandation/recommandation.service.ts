import {Injectable} from '@angular/core';
import {ProductType} from "../enum/ProductType";
import {DBProductType} from "../enum/DBProductType";

@Injectable({
    providedIn: 'root'
})
export class RecommandationService {

    constructor() {
    }

    public getSearchType(productType: ProductType): DBProductType {
        if (productType != ProductType.Movie) {
            return DBProductType.Film;
        } else {
            return DBProductType.All;
        }
    }

    public getGivenType(type: ProductType): DBProductType {
        switch (type) {
            case ProductType.Menu:
                return DBProductType.Menu;
            case ProductType.Movie:
                return DBProductType.Film;
            default:
                return DBProductType.Nourriture;
        }
    }
}
