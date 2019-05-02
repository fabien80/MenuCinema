import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {SearchBarComponent} from './search-bar.component';

@NgModule({
    declarations: [SearchBarComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ], exports: [SearchBarComponent]
})
export class SearchBarModule {
}
