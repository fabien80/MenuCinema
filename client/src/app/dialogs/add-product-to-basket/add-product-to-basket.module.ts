import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductToBasketComponent} from './add-product-to-basket.component';
import {ProductModule} from '../../product/product.module';
import {MenuModule} from '../../product/menu/menu.module';
import {FoodModule} from '../../product/food/food.module';
import {AppModule} from '../../app.module';
import {AmountButtonsModule} from '../../amount-buttons/amount-buttons.module';
import {MatButtonModule, MatDividerModule} from '@angular/material';
import {RecommendedMoviesModule} from "../../recommandation/recommended-movies/recommended-movies.module";
import {RecommandationModule} from "../../recommandation/recommandation.module";

@NgModule({
    declarations: [AddProductToBasketComponent],
    imports: [
        CommonModule,
        MenuModule,
        FoodModule,
        AmountButtonsModule,
        MatButtonModule,
        RecommendedMoviesModule,
        RecommandationModule,
        MatDividerModule
    ], exports: [AddProductToBasketComponent]
    , entryComponents: [AddProductToBasketComponent]
})
export class AddProductToBasketModule {
}
