import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrewTableComponent} from './crew-table.component';
import {MatIconModule} from '@angular/material';

@NgModule({
    declarations: [CrewTableComponent],
    imports: [
        CommonModule,
        MatIconModule

    ], exports: [CrewTableComponent]
})
export class CrewTableModule {
}
