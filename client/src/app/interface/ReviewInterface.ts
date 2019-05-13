import {DBProductType} from "../enum/DBProductType";

export interface ReviewInterface {
    produitId: string;
    typeProduit: DBProductType;
    commandeId?: number;
    note?: number;
    review?: string;
}
