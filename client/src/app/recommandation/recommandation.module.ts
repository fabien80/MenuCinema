import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommandationRoutingModule } from './recommandation-routing.module';
import { RecommandationComponent } from './recommandation.component';
import {RecommendedMoviesModule} from "./recommended-movies/recommended-movies.module";
import {RecommendedFoodsModule} from "./recommended-foods/recommended-foods.module";

@NgModule({
    declarations: [RecommandationComponent],
    exports: [
        RecommandationComponent
    ],
    imports: [
        CommonModule,
        RecommandationRoutingModule,
        RecommendedMoviesModule,
        RecommendedFoodsModule
    ]
})
export class RecommandationModule { }
