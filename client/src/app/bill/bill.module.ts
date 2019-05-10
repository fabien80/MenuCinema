import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillRoutingModule} from './bill-routing.module';
import {BillComponent} from './bill.component';
import { BillMenuInformationComponent } from './bill-menu-information/bill-menu-information.component';
import {BillMenuInformationModule} from './bill-menu-information/bill-menu-information.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [BillComponent],
    imports: [
        CommonModule,
        BillRoutingModule,
        BillMenuInformationModule,
        MatButtonModule
    ], exports: [BillComponent]
})
export class BillModule {
}
