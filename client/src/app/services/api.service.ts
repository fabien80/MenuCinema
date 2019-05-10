import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {ClientInterface} from '../interface/ClientInterface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient,
                private localStorageService: LocalStorageService) {
    }

    public getClient(token: string): Promise<any> {
        let params: HttpParams = new HttpParams();
        params = params.append('token', token);
        console.log(params);
        return this.http.get('/client', {params}).toPromise();
    }

    public postClient(client: ClientInterface): Promise<any> {
        const params: HttpParams = this.getClientParams(client);
        console.log(params);
        return this.http.post('/addClient', params.toString(),
            {
                headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
            }).toPromise();
    }

    public putClient(client: ClientInterface): Promise<any> {
        const params: HttpParams = this.getClientParams(client);
        return this.http.put('/updateClient', params.toString(), {
            headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }).toPromise();
    }

    getClientParams(client: ClientInterface) {
        let params: HttpParams = new HttpParams();
        params = params.set('token', client.token);
        params = params.set('nom', client.nom);
        params = params.set('prenom', client.prenom);
        params = params.set('rue', client.rue);
        params = params.set('code_postal', client.code_postal);
        params = params.set('numero_rue', client.numero_rue.toString());
        params = params.set('client_id', client.client_id != null ? client.client_id.toString() : '0');
        params = params.set('mail', client.mail);
        params = params.set('photo', client.photo);
        params = params.set('tel', client.tel.replace(/\s/g, ''));
        params = params.set('fidelite', client.fidelite != null ? client.fidelite.toString() : '0');
        params = params.set('ville', client.ville);
        return params;
    }

    async getClientHistory(token: string): Promise<any> {
        let params: HttpParams = new HttpParams();
        params = params.set('token', token);
        console.log("api service");
        console.log(params);
        return await this.http.get('/orderHistory', {
            params: params,
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).toPromise();
        // return {
        //     "commandeId":44,
        //     "dateHeure":"2019-05-09 14:11:54"
        //     ,"clientId":2,
        //     "idPlats":["1","2","3","4","5","5"]
        //     ,"idFilms":[],"idMenu":[],
        //     "prix":20.0,
        //     "numeroRue":10,
        //     "rue":"rue",
        //     "ville":"ville",
        //     "codePostal":"null"
        // };

    }

}
