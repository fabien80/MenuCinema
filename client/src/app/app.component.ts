import {Component, OnInit} from '@angular/core';
import {TmdbService} from './services/tmdb.service';
import {environment} from '../environments/environment';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {SearchType} from './enum/SearchType';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _searchString: string;
    private _searchRating: number;

    constructor(private tmdb: TmdbService,
                public authService: AuthService,
                private router: Router) {
        this.init();
        this._searchString = 'A';
        this._searchRating = 0;
    }

    ngOnInit(): void {
    }

    async init() {
        this.tmdb.init(environment.tmdbKey);
    }

    private signOut() {
        this.authService.signOut();
    }

    goToProfile() {
        this.router.navigate(['/profile']);
    }


    getLogoPath() {
        return `${environment.apiBaseUrl}photo/icon.png`;
    }

    goToHomepage() {
        this.router.navigate(['/homepage']);
    }

    /**
     * A chaque changement de recherche dans la bar de recherche, obtient la nouvelle string recherché
     * @param query : la nouvelle string recherché
     */
    public onSearch(query: string) {
        this.searchString = query;
    }


    get searchString(): string {
        return this._searchString;
    }

    set searchString(value: string) {
        this._searchString = value;
    }

    public onRating(query: number) {
        this._searchRating = query;
    }


    get searchRating(): number {
        return this._searchRating;
    }

    set searchRating(value: number) {
        this._searchRating = value;
    }

    rating1() {
        this._searchRating = 2;
    }
    rating2() {
        this._searchRating = 4;
    }
    rating3() {
        this._searchRating = 6;
    }
    rating4() {
        this._searchRating = 8;
    }
    rating5() {
        this._searchRating = 9;
    }

}
