import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecommendedMoviesRoutingModule} from './recommended-movies-routing.module';
import {RecommendedMoviesComponent} from "./recommended-movies.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [RecommendedMoviesComponent],
    imports: [
        CommonModule,
        RecommendedMoviesRoutingModule,
        NgbCarouselModule
    ], exports: [RecommendedMoviesComponent]
})
export class RecommendedMoviesModule {
}
