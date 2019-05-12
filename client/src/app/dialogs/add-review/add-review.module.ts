import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddReviewRoutingModule} from './add-review-routing.module';
import {AddReviewComponent} from "./add-review.component";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StarRatingModule} from "angular-star-rating";

@NgModule({
    declarations: [AddReviewComponent],
    imports: [
        CommonModule,
        AddReviewRoutingModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        StarRatingModule

    ], exports: [AddReviewComponent],
    entryComponents: [AddReviewComponent]
})
export class AddReviewModule {
}
