import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TmdbService} from './tmdb.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './movie/movie.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatGridListModule, MatIconModule,
    MatInputModule,
    MatToolbarModule
} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent
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
        MatIconModule
    ],
    providers: [TmdbService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
