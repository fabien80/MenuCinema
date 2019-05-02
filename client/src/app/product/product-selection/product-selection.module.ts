import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodComponent} from '../food/food.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductSelectionComponent} from './product-selection.component';
import {MatIcon, MatTabsModule} from '@angular/material';
import {DialogsModule} from '../../dialogs/dialogs.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTabsModule
    ], exports: []
})
export class ProductSelectionModule {
}
