import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TmdbService} from './services/tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StarRatingModule} from 'angular-star-rating';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FirebaseUIModule} from 'firebaseui-angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AuthModule} from './auth/auth.module';
import {ProductModule} from './product/product.module';
import {HomeModule} from './home/home.module';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MovieModule} from './product/movie/movie.module';
import {ProfileModule} from './profile/profile.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileFormModule} from "./profile/profile-form/profile-form.module";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {SearchBarModule} from "./search-bar/search-bar.module";
import {MovieTableModule} from "./product/movie/movie-table/movie-table.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StarRatingModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        FirebaseUIModule.forRoot(environment.firebaseUiAuthConfig),
        AuthRoutingModule,
        AuthModule,
        ProductModule,
        HomeModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MovieModule,
        ProfileModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        ProfileFormModule,
        MDBBootstrapModule.forRoot(),
        SearchBarModule,
        MovieTableModule
    ],
    providers: [TmdbService, AngularFirestore],
    bootstrap: [AppComponent],
    exports: [
        NavBarComponent
    ],
    entryComponents: []
})
export class AppModule {
}
