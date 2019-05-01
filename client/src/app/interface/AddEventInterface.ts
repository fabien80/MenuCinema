import {AddEventType} from '../enum/AddEventType';
import {ProductGroup} from '../product/class/productGroup';

export interface AddEventInterface {
    event: AddEventType;
    data: ProductGroup;
}
