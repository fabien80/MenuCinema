import {Component, OnInit} from '@angular/core';
import {TmdbService} from './services/tmdb.service';
import {MovieResponse} from './tmdb-data/Movie';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";

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

    private signOut() {
        this.authService.signOut();
    }

    goToProfile() {
        this.router.navigate(['/profile']);
    }


    getLogoPath() {
        return `${environment.apiBaseUrl}photo/icon.png`
    }
}
