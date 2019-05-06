import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    public getClient(token: string): Promise<any> {
        let params: HttpParams = new HttpParams();
        params = params.append('token', token);
        console.log(params);
        return this.http.get('/client', {params}).toPromise();
    }


}
