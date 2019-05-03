import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './basket.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {AmountButtonsModule} from '../amount-buttons/amount-buttons.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        BasketComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        AmountButtonsModule,
        MatButtonModule,
        RouterModule
    ], exports: [BasketComponent]
})
export class BasketModule {
}
