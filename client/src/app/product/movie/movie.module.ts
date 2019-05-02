import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie.component';
import {MatButtonModule, MatChipsModule, MatGridListModule, MatIconModule} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';
import {MovieTableComponent} from './movie-table/movie-table.component';

@NgModule({
    declarations: [
        MovieComponent
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatChipsModule,
        StarRatingModule,
        MatButtonModule,
        MatIconModule
    ], exports: [
        MovieComponent
    ]
})
export class MovieModule {
}
