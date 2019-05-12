import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MenuInformationRoutingModule} from './menu-information-routing.module';
import {MenuInformationComponent} from './menu-information.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
    declarations: [MenuInformationComponent],
    imports: [
        CommonModule,
        MenuInformationRoutingModule,
        MatIconModule,
        MatButtonModule
    ], exports: [MenuInformationComponent]
})
export class MenuInformationModule {
}
