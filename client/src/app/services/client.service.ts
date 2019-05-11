import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from './local-storage.service';
import {ClientInterface} from '../interface/ClientInterface';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';
import {HttpResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private _client: BehaviorSubject<ClientInterface>;

    constructor(private apiService: ApiService,
                private localStorageService: LocalStorageService,
                private router: Router) {
        this._client = new BehaviorSubject<ClientInterface>({
            clientId: 0,
            codePostal: '0',
            fidelite: 0,
            mail: '',
            nom: '',
            numeroRue: 0,
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

    createNewUserInApi(newClient: ClientInterface) {
        return new Promise((resolve, reject) => {
            this.apiService.postClient(newClient)
                .then(() => {
                    console.log('ok');
                    this.setClientValue(newClient);
                    this.router.navigate(['/homepage']);
                    return resolve();
                }).catch((error: Error) => {
                console.log(error);
                return reject(error);
            });
        });

    }

    updateUserInApi(updateClient: ClientInterface) {
        return new Promise((resolve, reject) => {
            this.apiService.putClient(updateClient)
                .then(() => {
                    this.setClientValue(updateClient);
                    return resolve();
                }).catch((error: Error) => {
                console.log(error);
                return reject(error);
            });
        });

    }

    getEmptyClient(): ClientInterface {
        return {
            fidelite: 0,
            clientId: 0,
            photo: '',
            token: '',
            tel: '',
            ville: '',
            mail: '',
            numeroRue: 1,
            codePostal: '',
            rue: '',
            prenom: '',
            nom: ''
        };
    }

    async getClientHistory() {
       return await this.apiService.getClientHistory(this._client.getValue().token).then(allCommand => {
            console.log('OK');
            console.log(allCommand);

            allCommand.forEach(oneCommand => {
                this.apiService.getProductsIds(oneCommand.idPlats.join(';') + ';' + oneCommand.idMenu.join(';')).then(foodDetail => {
                    oneCommand.nestedFood = foodDetail;
                    console.log('OsqddK');
                    console.log(foodDetail);


                }).catch((e) => {
                    console.log('ERR');
                    console.log(e);
                });
            });
            return allCommand;
        }).catch((e) => {
            console.log('ERR');
            console.log(e);
        });
    }
    uploadFile(value: any) {
        const formData = new FormData();
        formData.append('file', value);

        return this.apiService.uploadFile(formData, this.client.value.token);
    }
}
