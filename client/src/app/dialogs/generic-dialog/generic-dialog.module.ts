import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GenericDialogComponent} from './generic-dialog.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [GenericDialogComponent],
    imports: [
        CommonModule,
        MatButtonModule
    ]
})
export class GenericDialogModule { }
