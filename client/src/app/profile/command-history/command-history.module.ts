import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommandHistoryRoutingModule} from './command-history-routing.module';
import {CommandHistoryComponent} from './command-history.component';
import {CommandeModule} from '../../commande/commande.module';

@NgModule({
    declarations: [CommandHistoryComponent],
    imports: [
        CommonModule,
        CommandHistoryRoutingModule,
        CommandeModule
    ],
    exports: [
        CommandHistoryComponent
    ]
})
export class CommandHistoryModule {
}
