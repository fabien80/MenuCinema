import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {MatBadgeModule} from '@angular/material';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MatBadgeModule
    ], exports: [
        MenuComponent
    ]
})
export class MenuModule {
}
