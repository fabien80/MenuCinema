import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from './local-storage.service';
import {ClientInterface} from '../interface/ClientInterface';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private _client: BehaviorSubject<ClientInterface>;

    constructor(private apiService: ApiService,
                private localStorageService: LocalStorageService) {
        this._client = new BehaviorSubject<ClientInterface>({
            client_id: 0,
            code_postal: '0',
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
        console.log(this.localStorageService.getApiClient());
        this._client.next(this.localStorageService.getApiClient());
    }

    async init(token: string) {
        const client = await this.apiService.getClient(token);
        console.log(client);
        this._client.next(client);
        console.log(client);
        this.localStorageService.setApiClient(client);
    }

    public setClientValue(client: ClientInterface) {
        this.client.next(client);
        this.localStorageService.setApiClient(client);
    }


    get client(): BehaviorSubject<ClientInterface> {
        return this._client;
    }
}
