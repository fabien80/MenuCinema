import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CastTableComponent} from './cast-table.component';

@NgModule({
    declarations: [
        CastTableComponent
    ],
    imports: [
        CommonModule
    ], exports: [CastTableComponent]
})
export class CastTableModule {
}
