import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie.component';
import {MatButtonModule, MatChipsModule, MatGridListModule} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
    declarations: [
        MovieComponent
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatChipsModule,
        StarRatingModule,
        MatButtonModule
    ], exports: [
        MovieComponent
    ]
})
export class MovieModule {
}
