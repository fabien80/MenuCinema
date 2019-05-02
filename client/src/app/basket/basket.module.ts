import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './basket.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {AmountButtonsModule} from '../amount-buttons/amount-buttons.module';

@NgModule({
    declarations: [
        BasketComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        AmountButtonsModule,
        MatButtonModule
    ], exports: [BasketComponent]
})
export class BasketModule {
}
