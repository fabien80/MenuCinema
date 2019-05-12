import {DBProductType} from "../enum/DBProductType";

export interface ReviewInterface {
    commandeId: number;
    produitId: string;
    typeProduit: DBProductType;
    note?: number;
    review?: string;
}
