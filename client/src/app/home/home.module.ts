import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductSelectionComponent} from '../product/product-selection/product-selection.component';
import {ProductModule} from '../product/product.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        CommonModule,
        ProductModule
    ]
})
export class HomeModule {
}
