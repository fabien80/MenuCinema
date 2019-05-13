import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReviewRoutingModule} from './review-routing.module';
import {ReviewComponent} from './review.component';
import {StarRatingModule} from "angular-star-rating";

@NgModule({
    declarations: [ReviewComponent],

    imports: [
        CommonModule,
        ReviewRoutingModule,
        StarRatingModule
    ], exports: [
        ReviewComponent
    ]
})
export class ReviewModule {
}
