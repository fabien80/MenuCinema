import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductToBasketComponent} from './add-product-to-basket/add-product-to-basket.component';
import {ProductModule} from '../product/product.module';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {AddProductToBasketModule} from './add-product-to-basket/add-product-to-basket.module';
import {GenericDialogComponent} from './generic-dialog/generic-dialog.component';
import {GenericDialogModule} from './generic-dialog/generic-dialog.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AddProductToBasketModule,
        GenericDialogModule,
        MatDialogModule,
        MatButtonModule
    ], exports: [],
    entryComponents: [AddProductToBasketComponent, GenericDialogComponent]
})
export class DialogsModule {
}
