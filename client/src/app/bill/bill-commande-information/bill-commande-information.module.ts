import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BillCommandeInformationComponent} from './bill-commande-information.component';
import {BillMenuInformationModule} from '../bill-menu-information/bill-menu-information.module';
import {MatButtonModule, MatExpansionModule} from '@angular/material';

@NgModule({
    declarations: [BillCommandeInformationComponent],
    imports: [
        CommonModule,
        BillMenuInformationModule,
        MatButtonModule,
        MatExpansionModule
    ], exports: [BillCommandeInformationComponent]
})
export class BillCommandeInformationModule {
}
