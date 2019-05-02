import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductToBasketComponent} from './add-product-to-basket/add-product-to-basket.component';
import {ProductModule} from '../product/product.module';
import {MatDialogModule} from '@angular/material';
import {AddProductToBasketModule} from './add-product-to-basket/add-product-to-basket.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AddProductToBasketModule,
        MatDialogModule
    ], exports: [],
    entryComponents: [AddProductToBasketComponent]
})
export class DialogsModule {
}
