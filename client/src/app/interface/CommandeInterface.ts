import {NestedProductInterface} from './NestedProductInterface';

export interface CommandeInterface {
    commandeId: number;
    clientId: number;
    dateHeure: string;
    idFilms: string[];
    idMenu: string[];
    idPlats: string[];
    nestedProduct: NestedProductInterface;
    numeroRue: number;
    rue: string;
    ville: string;
    codePostal: string;
    prix: number;
}
