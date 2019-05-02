import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TmdbService} from './services/tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './product/movie/movie.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StarRatingModule} from 'angular-star-rating';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {AngularFirestore} from '@angular/fire/firestore';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {HomeComponent} from './home/home.component';
import {MovieTableComponent} from './product/movie/movie-table/movie-table.component';
import {AddProductToBasketComponent} from './dialogs/add-product-to-basket/add-product-to-basket.component';
import {BasketComponent} from './basket/basket.component';
import {AmountButtonsComponent} from './amount-buttons/amount-buttons.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AuthModule} from './auth/auth.module';
import {ProductModule} from './product/product.module';
import {HomeModule} from './home/home.module';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {SearchBarModule} from './search-bar/search-bar.module';
import {DialogsModule} from './dialogs/dialogs.module';
import {AmountButtonsModule} from './amount-buttons/amount-buttons.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MovieTableComponent,
        BasketComponent
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
        MatIconModule,
        MatToolbarModule,
        SearchBarModule,
        MatFormFieldModule,
        DialogsModule,
        AmountButtonsModule,
        MatButtonModule
    ],
    providers: [TmdbService, AngularFirestore],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
