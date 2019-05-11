import {NestedFoodInterface} from './NestedFoodInterface';

export interface CommandeInterface {
    commandeId: number;
    clientId: number;
    dateHeure: string;
    idFilms: string[];
    idMenu: string[];
    idPlats: string[];
    nestedFood: NestedFoodInterface;
    numeroRue: number;
    rue: string;
    ville: string;
    codePostal: string;
    prix: number;
}
