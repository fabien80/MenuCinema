import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie.component';
import {MatButtonModule, MatChipsModule, MatGridListModule, MatIconModule} from '@angular/material';
import {StarRatingModule} from 'angular-star-rating';
import {MovieTableComponent} from './movie-table/movie-table.component';
import {CastTableModule} from './cast-table/cast-table.module';
import {CrewTableModule} from './crew-table/crew-table.module';
import {BasketModule} from '../../basket/basket.module';
import {MovieRoutingModule} from './movie-routing.module';
import {RecommandationModule} from "../../recommandation/recommandation.module";
import {ReviewListModule} from "../review-list/review-list.module";
import { MovieTestsecondComponent } from './movie-testsecond/movie-testsecond.component';

@NgModule({
    declarations: [
        MovieComponent,
        MovieTestsecondComponent
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatChipsModule,
        StarRatingModule,
        MatButtonModule,
        MatIconModule,
        CastTableModule,
        CrewTableModule,
        BasketModule,
        MovieRoutingModule,
        RecommandationModule,
        ReviewListModule
    ], exports: [
        MovieComponent,
        MovieTestsecondComponent
    ]
})
export class MovieModule {
}
