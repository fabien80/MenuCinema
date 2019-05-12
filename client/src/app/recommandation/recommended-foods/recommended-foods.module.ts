import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedFoodsRoutingModule } from './recommended-foods-routing.module';
import { RecommendedFoodsComponent } from './recommended-foods.component';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {FoodModule} from "../../product/food/food.module";
import {MenuModule} from "../../product/menu/menu.module";
import {MenuInformationModule} from "../../product/menu/menu-information/menu-information.module";
import {MatButtonModule, MatExpansionModule} from "@angular/material";

@NgModule({
    declarations: [RecommendedFoodsComponent],
    exports: [
        RecommendedFoodsComponent
    ],
    imports: [
        CommonModule,
        RecommendedFoodsRoutingModule,
        NgbCarouselModule,
        FoodModule,
        MenuModule,
        MenuInformationModule,
        MatExpansionModule,
        MatButtonModule
    ]
})
export class RecommendedFoodsModule { }
