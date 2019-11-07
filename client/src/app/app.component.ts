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


    constructor(private tmdb: TmdbService,
                public authService: AuthService,
                private router: Router) {
        this.init();
    }

    ngOnInit(): void {
    }

    async init() {
        this.tmdb.init(environment.tmdbKey);
    }


}
