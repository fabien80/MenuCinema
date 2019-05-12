import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReviewListRoutingModule} from './review-list-routing.module';
import {ReviewListComponent} from "./review-list.component";
import {MatDividerModule, MatExpansionModule} from "@angular/material";
import {ReviewModule} from "./review/review.module";
import {StarRatingModule} from "angular-star-rating";

@NgModule({
    declarations: [ReviewListComponent],
    imports: [
        CommonModule,
        ReviewListRoutingModule,
        MatExpansionModule,
        ReviewModule,
        StarRatingModule,
        MatDividerModule
    ], exports: [ReviewListComponent]
})
export class ReviewListModule {
}
