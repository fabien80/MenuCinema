import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmountButtonsComponent} from './amount-buttons.component';
import {MatIconModule} from '@angular/material';

@NgModule({
    declarations: [AmountButtonsComponent],
    imports: [
        CommonModule,
        MatIconModule
    ], exports: [AmountButtonsComponent]
})
export class AmountButtonsModule {
}
