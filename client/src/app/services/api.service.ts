import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ClientInterface} from '../interface/ClientInterface';
import {LocalStorageService} from './local-storage.service';

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
        let body: HttpParams = new HttpParams();
        body = body.set('token', client.token);
        body = body.set('nom', client.nom);
        body = body.set('prenom', client.prenom);
        body = body.set('rue', client.rue);
        body = body.set('code_postal', client.code_postal);
        body = body.set('numero_rue', client.numero_rue.toString());
        body = body.set('client_id', client.client_id.toString());
        body = body.set('mail', client.mail);
        body = body.set('photo', client.photo);
        body = body.set('tel', client.tel.replace(/\s/g, ''));
        body = body.set('fidelite', client.fidelite.toString());
        body = body.set('ville', client.ville);
        console.log(body);
        return this.http.post('/addClient', body.toString(),
            {
                headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
            }).toPromise();
    }


}
