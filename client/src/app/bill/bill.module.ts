import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillRoutingModule} from './bill-routing.module';
import {BillComponent} from './bill.component';
import { MenuInformationComponent } from '../product/menu/menu-information/menu-information.component';
import {MenuInformationModule} from '../product/menu/menu-information/menu-information.module';
import {MatButtonModule, MatExpansionModule} from '@angular/material';

@NgModule({
    declarations: [BillComponent],
    imports: [
        CommonModule,
        BillRoutingModule,
        MenuInformationModule,
        MatButtonModule,
        MatExpansionModule
    ], exports: [BillComponent]
})
export class BillModule {
}
