import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductToBasketComponent} from './add-product-to-basket.component';
import {ProductModule} from '../../product/product.module';
import {MenuModule} from '../../product/menu/menu.module';
import {FoodModule} from '../../product/food/food.module';
import {AppModule} from '../../app.module';
import {AmountButtonsModule} from '../../amount-buttons/amount-buttons.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [AddProductToBasketComponent],
    imports: [
        CommonModule,
        MenuModule,
        FoodModule,
        AmountButtonsModule,
        MatButtonModule
    ], exports: [AddProductToBasketComponent]
    , entryComponents: [AddProductToBasketComponent]
})
export class AddProductToBasketModule {
}
