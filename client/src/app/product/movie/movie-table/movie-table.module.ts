import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieTableComponent} from './movie-table.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';
import {SearchBarModule} from '../../../search-bar/search-bar.module';

@NgModule({
    declarations: [MovieTableComponent],
    imports: [
        CommonModule,
        MatIconModule,
        StarRatingModule,
        SearchBarModule,
        MatButtonModule
    ], exports: [MovieTableComponent]
})
export class MovieTableModule {
}
