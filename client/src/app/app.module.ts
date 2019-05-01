import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './product/movie/movie.component';
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
import {SearchBarComponent} from './search-bar/search-bar.component';
import {HomeComponent} from './home/home.component';
import { MovieTableComponent } from './product/movie/movie-table/movie-table.component';
import { ProductSelectionComponent } from './product/product-selection/product-selection.component';
import { FoodComponent } from './product/food/food.component';
import { ProductListComponent } from './product/product-selection/product-list/product-list.component';
import { AddProductToBasketComponent } from './dialogs/add-product-to-basket/add-product-to-basket.component';
import { BasketComponent } from './basket/basket.component';
import { MenuComponent } from './product/menu/menu.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        /*{
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                auth_type: 'reauthenticate'
            },
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        },*/
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: false,
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        },
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-link>',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        SearchBarComponent,
        HomeComponent,
        MovieTableComponent,
        ProductSelectionComponent,
        FoodComponent,
        ProductListComponent,
        AddProductToBasketComponent,
        BasketComponent,
        MenuComponent
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
        FirebaseUIModule.forRoot(firebaseUiAuthConfig),
        MatTableModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatDialogModule
    ],
    providers: [TmdbService, AngularFirestore],
    bootstrap: [AppComponent],
    entryComponents: [AddProductToBasketComponent]
})
export class AppModule {
}
