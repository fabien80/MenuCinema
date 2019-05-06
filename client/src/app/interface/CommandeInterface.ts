import {BasketInterface} from './BasketInterface';

interface CommandeInterface {
    basket: BasketInterface;
    token: string;
    numero_rue: number;
    rue: string;
    code_postal: string;
    ville: string;
}
