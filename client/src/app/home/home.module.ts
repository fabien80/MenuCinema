import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductSelectionComponent} from '../product/product-selection/product-selection.component';
import {ProductModule} from '../product/product.module';
import {MovieTableModule} from '../product/movie/movie-table/movie-table.module';
import {HomeComponent} from './home.component';
import {MatButtonToggleModule, MatIconModule} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';
import {SearchBarModule} from '../search-bar/search-bar.module';
import {AppModule} from '../app.module';
import {BasketModule} from '../basket/basket.module';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        ProductModule,
        MovieTableModule,
        MatIconModule,
        StarRatingModule,
        MatButtonToggleModule,
        SearchBarModule,
        BasketModule
    ]
})
export class HomeModule {
}
