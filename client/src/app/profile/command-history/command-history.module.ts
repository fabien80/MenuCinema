import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandHistoryRoutingModule} from './command-history-routing.module';
import {CommandHistoryComponent} from './command-history.component';
import {MatButtonModule, MatExpansionModule} from '@angular/material';
import {CommandeInformationModule} from './commande-information/commande-information.module';

@NgModule({
    declarations: [CommandHistoryComponent],
    imports: [
        CommonModule,
        CommandHistoryRoutingModule,
        MatButtonModule,
        MatExpansionModule,
        CommandeInformationModule
    ],
    exports: [
        CommandHistoryComponent
    ]
})
export class CommandHistoryModule {
}
