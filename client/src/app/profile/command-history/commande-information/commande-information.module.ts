import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandeInformationComponent} from './commande-information.component';
import {MenuInformationModule} from '../../../product/menu/menu-information/menu-information.module';
import {MatButtonModule, MatExpansionModule, MatIconModule} from '@angular/material';
import {AddReviewComponent} from "../../../dialogs/add-review/add-review.component";
import {AddReviewModule} from "../../../dialogs/add-review/add-review.module";

@NgModule({
    declarations: [CommandeInformationComponent],
    imports: [
        CommonModule,
        MenuInformationModule,
        MatButtonModule,
        MatExpansionModule,
        AddReviewModule,
        MatIconModule
    ], exports: [CommandeInformationComponent]
})
export class CommandeInformationModule {
}
