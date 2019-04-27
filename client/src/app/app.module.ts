import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './movie/movie.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatButtonToggleModule,
    MatCardModule,
    MatChipsModule, MatDialogModule,
    MatFormFieldModule,
    MatGridListModule, MatIconModule,
    MatInputModule, MatTableModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {HomeComponent} from './home/home.component';
import { MovieTableComponent } from './movie/movie-table/movie-table.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AuthModule} from './auth/auth.module';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent
        MovieComponent,
        MovieTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatChipsModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        StarRatingModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AuthModule
    ],
    providers: [TmdbService, AngularFirestore],
    bootstrap: [AppComponent],
    entryComponents: [AddFoodToBasketComponent]
})
export class AppModule {
}
