import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductToBasketComponent} from './add-product-to-basket/add-product-to-basket.component';
import {ProductModule} from '../product/product.module';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {AddProductToBasketModule} from './add-product-to-basket/add-product-to-basket.module';
import {GenericDialogComponent} from './generic-dialog/generic-dialog.component';
import {GenericDialogModule} from './generic-dialog/generic-dialog.module';
import {CommandeDialogComponent} from './commande-dialog/commande-dialog.component';
import {CommandeDialogModule} from './commande-dialog/commande-dialog.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AddProductToBasketModule,
        GenericDialogModule,
        CommandeDialogModule,
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [CommandeDialogComponent, GenericDialogComponent, AddProductToBasketComponent]
})
export class DialogsModule {
}
