import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private client: BehaviorSubject<ClientInterface>;

    constructor(private apiService: ApiService,
                private localStorageService: LocalStorageService) {
        this.client = new BehaviorSubject<ClientInterface>({
            client_id: 0,
            code_postal: 0,
            fidelite: 0,
            mail: '',
            nom: '',
            numero_rue: 0,
            photo: '',
            prenom: '',
            rue: '',
            tel: '',
            token: '',
            ville: ''
        });
        this.client.next(this.localStorageService.getUserInfos());
    }

    async init(token: string) {
        const client = await this.apiService.getClient(token);
        this.client.next(client);
        this.localStorageService.setUserInfos(client);
    }
}
