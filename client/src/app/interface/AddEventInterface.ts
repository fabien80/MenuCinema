import {AddEventType} from '../enum/AddEventType';
import {ProductGroupInterface} from './ProductInterface';

export interface AddEventInterface {
    event: AddEventType;
    data: ProductGroupInterface<any>;
}
