import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandeComponent} from './commande.component';
import {CommandHistoryComponent} from '../profile/command-history/command-history.component';

@NgModule({
  declarations: [CommandeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommandeComponent
  ]
})
export class CommandeModule { }
