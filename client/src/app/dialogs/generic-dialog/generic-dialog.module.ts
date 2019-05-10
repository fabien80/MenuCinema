import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GenericDialogComponent} from './generic-dialog.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [GenericDialogComponent],
    imports: [
        CommonModule,
        MatButtonModule
    ], exports: [GenericDialogComponent]
    , entryComponents: [GenericDialogComponent]
})
export class GenericDialogModule {
}
