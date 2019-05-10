import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandeDialogComponent} from './commande-dialog.component';
import {MenuModule} from '../../product/menu/menu.module';
import {
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BillModule} from '../../bill/bill.module';

@NgModule({
    declarations: [CommandeDialogComponent],
    imports: [
        CommonModule,
        MenuModule,
        MatBadgeModule,
        MatDividerModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        BillModule,
        MatDialogModule

    ],
    exports: [CommandeDialogComponent],
    entryComponents: [CommandeDialogComponent]
})
export class CommandeDialogModule {
}
