import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatIconModule} from '@angular/material';
import {SearchBarComponent} from './search-bar.component';

@NgModule({
    declarations: [SearchBarComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule
    ], exports: [SearchBarComponent]
})
export class SearchBarModule {
}
