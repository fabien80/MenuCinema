import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoodComponent} from './food.component';

@NgModule({
  declarations: [
      FoodComponent
  ],
  imports: [
    CommonModule
  ], exports: [
      FoodComponent
    ]
})
export class FoodModule { }
