import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillMenuInformationRoutingModule} from './bill-menu-information-routing.module';
import {BillMenuInformationComponent} from './bill-menu-information.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
    declarations: [BillMenuInformationComponent],
    imports: [
        CommonModule,
        BillMenuInformationRoutingModule,
        MatIconModule,
        MatButtonModule
    ], exports: [BillMenuInformationComponent]
})
export class BillMenuInformationModule {
}
