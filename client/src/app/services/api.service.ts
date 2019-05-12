import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {ClientInterface} from '../interface/ClientInterface';
import {Basket} from '../basket/Basket';
import {AddressInterface} from '../interface/AddressInterface';
import {MenuGroup} from '../product/menu/MenuGroup';
import {ProductGroup} from '../product/class/productGroup';
import {Movie} from '../product/movie/Movie';
import {environment} from '../../environments/environment';
import {SearchProductQuery} from '../interface/SearchInterface';
import {DBProductType} from "../enum/DBProductType";
import {ReviewInterface} from "../interface/ReviewInterface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient,
                private localStorageService: LocalStorageService) {
    }

    public getClient(uid: string): Promise<any> {
        let params: HttpParams = new HttpParams();
        params = params.append('token', uid);
        console.log(params);
        return this.http.get(environment.proxyBaseUrl + '/client', {params}).toPromise();
    }

    public postClient(client: ClientInterface): Promise<any> {
        const params: HttpParams = this.getClientParams(client);
        console.log(params);
        return this.http.post(environment.proxyBaseUrl + '/addClient', params.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            }).toPromise();
    }

    public putClient(client: ClientInterface): Promise<any> {
        const params: HttpParams = this.getClientParams(client);
        return this.http.put(environment.proxyBaseUrl + '/updateClient', params.toString(), {
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
        params = params.set('code_postal', client.codePostal);
        params = params.set('numero_rue', client.numeroRue.toString());
        params = params.set('client_id', client.clientId != null ? client.clientId.toString() : '0');
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
        return await this.http.get(environment.proxyBaseUrl + '/orderHistory', {
            params: params,
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).toPromise();

    }

    async getProductsIds(productsIds: string): Promise<any> {
        let params: HttpParams = new HttpParams();
        params = params.set('ids', productsIds);
        return await this.http.get(environment.proxyBaseUrl + '/produitsIds', {
            params: params,
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).toPromise();

    }

    payement(basket: Basket, address: AddressInterface, token: string) {
        let params: HttpParams = new HttpParams();
        params = params.set('prix', basket.total.toString());
        params = params.set('token', token);
        params = params.set('numero_rue', address.numeroRue.toString());
        params = params.set('rue', address.rue);
        params = params.set('ville', address.ville);
        params = params.set('code_postal', address.codePostal);
        params = params.set('id_plats', this.productGroupToIds(basket.foodGroups));
        params = params.set('id_menus', this.productGroupToIds(basket.menuGroups));
        params = params.set('id_films', this.moviesToIds(basket.movies));
        console.log(basket.foodGroups);
        return this.http.post(environment.proxyBaseUrl + '/addCommande', params.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            }).toPromise();
    }


    private moviesToIds(movies: Movie[]): string {
        return movies.reduce((ids: string, currentValue: Movie) => {
            ids += `${currentValue.id};`;
            return ids;
        }, '');

    }

    private productGroupToIds(groups: ProductGroup<any>[]): string {
        const res = groups.reduce((ids: string, currentValue: any) => {
            for (let i = 0; i < currentValue.amount; i++) {
                ids += `${currentValue.product.id};`;
            }
            return ids;
        }, '');
        console.log(res);
        return res;

    }

    uploadFile(formData: FormData, uid: string) {
        const params = new HttpParams().append('uid', uid);
        return this.http.post<any>(environment.proxyBaseUrl + '/uploadPhoto', formData, {
            params,
            observe: 'response'
        }).toPromise();
    }

    searchProduct(query: SearchProductQuery) {
        let params = new HttpParams();
        params = query.query != null ? params.append('query', query.query) : params;
        params = query.type != null ? params.append('type', query.type) : params;
        const url = environment.proxyBaseUrl + `/search/product`;
        return this.http.get(url, {params}).toPromise();

    }

    getRecommandations(productId: string, givenType: DBProductType, searchType: DBProductType) {
        let params = new HttpParams();
        params = params.append('id', productId);
        params = params.append('type_donne', givenType);
        params = params.append('type_recherche', searchType);
        return this.http.get(environment.proxyBaseUrl + '/recommandation', {params, responseType: "json"}).toPromise();
    }

    getProductsByIds(ids: string) {
        let params = new HttpParams();
        params = params.append('ids', ids);
        return this.http.get(environment.proxyBaseUrl + '/produitsIds', {params}).toPromise();
    }

    addReview(review: ReviewInterface) {
        let params = new HttpParams();
        params = params.append('commande_id', review.commandeId.toString());
        params = params.append('produit_id', review.produitId);
        params = params.append('type_produit', review.typeProduit);
        params = params.append('note', review.note.toString());
        params = params.append('review', review.review);

        return this.http.put(environment.proxyBaseUrl + '/addReview', {}, {params}).toPromise();
    }

    getReviewsOfProduct(review: ReviewInterface) {
        let params = new HttpParams();
        params = params.append('produit_id', review.produitId);
        params = params.append('type_produit', review.typeProduit);

        return this.http.get(environment.proxyBaseUrl + '/reviewsOfProduct', {params}).toPromise();
    }

    getAverageRating(review: ReviewInterface) {
        let params = new HttpParams();
        params = params.append('produit_id', review.produitId);
        params = params.append('type_produit', review.typeProduit);

        return this.http.get(environment.proxyBaseUrl + '/averageRating', {params}).toPromise();
    }
}

