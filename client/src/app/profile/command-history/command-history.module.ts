import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandHistoryRoutingModule } from './command-history-routing.module';
import { CommandHistoryComponent } from './command-history.component';

@NgModule({
  declarations: [CommandHistoryComponent],
  imports: [
    CommonModule,
    CommandHistoryRoutingModule
  ],
    exports: [
        CommandHistoryComponent
    ]
})
export class CommandHistoryModule { }
