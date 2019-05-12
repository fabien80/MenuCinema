import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandHistoryRoutingModule} from './command-history-routing.module';
import {CommandHistoryComponent} from './command-history.component';
import {MatButtonModule, MatExpansionModule} from '@angular/material';
import {BillCommandeInformationModule} from '../../bill/bill-commande-information/bill-commande-information.module';

@NgModule({
    declarations: [CommandHistoryComponent],
    imports: [
        CommonModule,
        CommandHistoryRoutingModule,
        MatButtonModule,
        MatExpansionModule,
        BillCommandeInformationModule
    ],
    exports: [
        CommandHistoryComponent
    ]
})
export class CommandHistoryModule {
}
