import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecommendationRoutingModule} from './recommendation-routing.module';
import {RecommendationComponent} from './recommendation.component';
import {SwiperModule} from 'angular2-useful-swiper';

@NgModule({
    declarations: [
        RecommendationComponent
    ],
    imports: [
        CommonModule,
        RecommendationRoutingModule,
        SwiperModule
    ], exports: [
        RecommendationComponent
    ]
})
export class RecommendationModule {
}
