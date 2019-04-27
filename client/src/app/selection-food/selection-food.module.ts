import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodComponent} from './food/food.component';
import {FoodListComponent} from './food-list/food-list.component';

@NgModule({
    declarations: [FoodListComponent],
    imports: [
        CommonModule
    ]
})
export class SelectionFoodModule {
}
