import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {FoodComponent} from './food/food.component';
import {ProductSelectionComponent} from './product-selection/product-selection.component';
import {ProductListComponent} from './product-selection/product-list/product-list.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatTabsModule} from '@angular/material';
import {ProductSelectionModule} from './product-selection/product-selection.module';
import {MovieComponent} from './movie/movie.component';
import {MenuModule} from './menu/menu.module';
import {FoodModule} from './food/food.module';
import {MovieModule} from './movie/movie.module';
import {DialogsModule} from '../dialogs/dialogs.module';

@NgModule({
    declarations: [
        ProductSelectionComponent,
        ProductListComponent

    ],
    imports: [
        CommonModule,
        MatTabsModule,
        ProductSelectionModule,
        MatIconModule,
        MenuModule,
        FoodModule,
        MovieModule,
        MatButtonModule,
        MatDialogModule
    ], exports: [
        ProductSelectionComponent,
        ProductListComponent
    ]
})
export class ProductModule {
}
