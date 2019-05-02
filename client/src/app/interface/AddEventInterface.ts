import {AddEventType} from '../enum/AddEventType';
import {ProductGroup} from '../product/class/productGroup';
import {ProductGroupInterface} from './ProductInterface';

export interface AddEventInterface {
    event: AddEventType;
    data: ProductGroupInterface<any>;
}
